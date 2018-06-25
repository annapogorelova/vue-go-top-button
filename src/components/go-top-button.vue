<template>
    <transition name="fade">
        <button type="button" aria-label="go to top of page" v-if="show"
                v-on:click="scrollTop"
                :style="getStyle()"
                :class="classNames">
            <slot></slot>
        </button>
    </transition>
</template>

<style scoped>
    .go-top-button {
        position: fixed;
        cursor: pointer;
        outline: none;
        top: 50%;
        bottom: 50%;
        right: 0;
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-decoration: none;
        color: #ffffff;
        background: rgba(0, 0, 0, 0.3);
        border: none;
        border-radius: 3px 0 0 3px;
    }

    .go-top-button:hover, .go-top-button:focus {
        background-color: rgba(0, 0, 0, 0.6);
        text-decoration: none;
        color: white;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

<script>
    export default {
        name: "go-top-button",
        props: {
            styles: {
                type: Object,
                default: null
            },
            scrollDistance: {
                type: Number,
                default: 200
            },
            classNames: {
                type: String,
                default: "go-top-button"
            },
            speed: {
                type: Number,
                default: 80
            },
            acceleration: {
                type: Number,
                default: 0
            },
            animate: {
                type: Boolean,
                default: false
            }
        },
        data: function () {
            return {
                timerID: null,
                show: false
            }
        },
        created: function () {
            window.addEventListener("scroll", this.handleScroll);
            this.validateInputs();
        },
        destroyed: function () {
            window.removeEventListener("scroll", this.handleScroll);
        },
        methods: {
            handleScroll: function () {
                if (this.isBrowser()) {
                    this.show = this.getCurrentScrollTop() > this.scrollDistance ? true : false;
                }
            },
            getCurrentScrollTop() {
                if (typeof window.scrollY !== "undefined" && window.scrollY >= 0) {
                    return window.scrollY;
                }

                if (typeof window.pageYOffset !== "undefined" && window.pageYOffset >= 0) {
                    return window.pageYOffset;
                }

                if (typeof document.body.scrollTop !== "undefined" && document.body.scrollTop >= 0) {
                    return document.body.scrollTop;
                }

                if (typeof document.documentElement.scrollTop !== "undefined" && document.documentElement.scrollTop >= 0) {
                    return document.documentElement.scrollTop;
                }

                return 0;
            },
            scrollTop: function (event) {
                if (!this.isBrowser()) {
                    return;
                }

                event.preventDefault();
                if (this.animate) {
                    this.animateScrollTop();
                } else {
                    window.scrollTo(0, 0);
                }
            },
            isBrowser: function () {
                return typeof (window) !== "undefined";
            },
            animateScrollTop: function () {
                if(this.timerID !== null) {
                    return;
                }

                let initialSpeed = this.speed;
                const that = this;

                this.timerID = setInterval(function() {
                    window.scrollBy(0, -initialSpeed);
                    initialSpeed = initialSpeed + that.acceleration;
                    if (that.getCurrentScrollTop() === 0){
                        clearInterval(that.timerID);
                        that.timerID = null;
                    }
                }, 15);
            },
            getStyle: function () {
                return this.styles || {};
            },
            validateInputs: function () {
                const errorMessagePrefix = "GoTopButton component input validation error: ";

                if (this.scrollDistance < 0) {
                    throw Error(errorMessagePrefix + "'scrollDistance' parameter must be greater or equal to 0");
                }

                if (this.speed < 1) {
                    throw Error(errorMessagePrefix + "'speed' parameter must be a positive number");
                }

                if (this.acceleration < 0) {
                    throw Error(errorMessagePrefix + "'acceleration' parameter must be greater or equal to 0");
                }

                if (typeof this.classNames !== "string") {
                    throw Error(errorMessagePrefix + "'classNames' parameter must be a string like 'class1 class2 class3'");
                }
            }
        }
    }
</script>