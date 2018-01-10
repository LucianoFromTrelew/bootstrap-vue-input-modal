# bootstrap-vue-input-modal

A Vue component that displays a modal for input data

**This component uses another component called 'formGroupInput.vue'. I have taken it from [this admin template](https://github.com/cristijora/vue-paper-dashboard)**

## Installation
You will have to install **bootstrap** (*beta4.0.0-beta.3* version) and **bootstrap-vue** in order to make this component work:
```js
npm i --save-dev bootstrap-vue bootstrap@beta4.0.0-beta.3 bootstrap-vue-input-modal
```

### Browser

Include the script file, then install the component with `Vue.use(InputModal);` e.g.:

```html
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
<link rel="stylesheet" href="node_modules/bootstrap-vue/dist/bootstrap-vue.css">
<script type="text/javascript" src="node_modules/vue/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/bootstrap-vue/dist/bootstrap-vue.min.js"></script>
<script type="text/javascript" src="node_modules/bootstrap-vue-input-modal/dist/b-input-modal.min.js"></script>
<script type="text/javascript">
Vue.use(InputModal);
</script> 
```
Or you can use it via unpkg.com (without installing the modules with "npm i"):
```html
<link rel="stylesheet" href="https://unpkg.com/bootstrap@4.0.0-beta.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://unpkg.com/bootstrap-vue@1.4.0/dist/bootstrap-vue.css">
<script type="text/javascript" src="https://unpkg.com/vue@2.5.13/dist/vue.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/bootstrap-vue@1.4.0/dist/bootstrap-vue.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/bootstrap-vue-input-modal@1.1.2-0/dist/b-input-modal.min.js"></script>
<script type="text/javascript">
Vue.use(InputModal);
</script> 
```

### Module

```js
//main.js
//Bootstrap's styles and components imports
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
```
```js
//Component where do you want to use the modal
import InputModal from 'bootstrap-vue-input-modal'
```

## Usage

Once installed, it has to be added to the component's components:

```js
components: {
    ...
    'b-input-modal': InputModal,
    ...
},
```
Once it had been added, it can be used in a template as simply as:

```html
<b-input-modal></b-input-modal>
```
