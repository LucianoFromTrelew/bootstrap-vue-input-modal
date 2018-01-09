# bootstrap-vue-input-modal

A Vue component that displays a modal for input data

## Installation

```js
npm i --save-dev bootstrap-vue bootstrap@beta4.0.0-beta.3 bootstrap-vue-input-modal
```

### Browser

Include the script file, then install the component with `Vue.use(InputModal);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/bootstrap-vue-input-modal/dist/b-input-modal.min.js"></script>
<script type="text/javascript">
  Vue.use(InputModal);
</script>
```

### Module

```js
import InputModal from 'bootstrap-vue-input-modal';
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
