# vue-go-top-button

A simple customizable go-to-top button component for Vue projects.

## Installation

```
npm install vue-go-top-button --save
```

## API
| Property | Type | Description |
| ------ | ------ | ------ |
| scrollDistance | *number* | Number of pixels to be scrolled Y for button to be shown. Defaults to 200px. Must be greater than zero. |
| styles | *object* | User-defined styles config for the button. |
| classNames | *string* | Custom class names in the following format 'class1 class2 class3'. |
| animate | *boolean* | If true, scrolling will be animated. False by default. |
| speed | *number* | Speedof animated scroll. Must be greater than 1. 80 by default. |
| acceleration  | *number* | Number of pixels to speed up when scrolling is animated. Zero by default - this way page will be scrolled top with the constant speed. |

## Usage
Import statement:
```
// Your component code
import GoTopButton from "vue-go-top-button";
import "vue-go-top-button/dist/lib/vue-go-top-button.min.css";

export default {
    components: {GoTopButton}
}
```
On your template paste the `<go-top-button></go-top-button>` html. This will add a simple button with default styles and without animated scroll. By default go-top-button will appear on the right side, 50% top and bottom and without any icons or text. You can then customize its styles and behaviour.

Example of customization:
```
<go-top-button   :animate="true"
                 :speed="50"
                 :acceleration="2"
                 :scrollDistance="300"
                 :classNames="'custom-class'"
                 :styles="{
                    'border-radius': '20px 20px 20px 20px',
                    'right': '5px',
                    'color': 'green',
                    'border': '5px solid',
                    'line-height': '20px'
                 }">
        <i class=\'fa fa-arrow-up\'></i>
  </go-top-button>
```

Custom CSS class declaration (if needed):
```$xslt
.custom-class {
    position: fixed;
    background-color: pink;
    border-color: green;
    height: 30px;
    width: 30px;
}
```
