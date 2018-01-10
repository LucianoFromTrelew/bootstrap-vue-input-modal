# bootstrap-vue-input-modal

> A boostrap-vue modal for input data and validate it.

```html
/*vue*/
<desc>
Hello `world`
* a
* b
</desc>
<template>
    <div>
        <div className='wrapper'>
            <div>
                <p>author: {{globalVariable}}</p>
                <b-btn variant='success' v-b-modal.input-modal>AHREA</b-btn>
                <b-input-modal :id="'input-modal'"></b-input-modal>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                globalVariable,
                style: {
                    color: 'blue'
                }
            }
        },
        methods: {
            onClick() {
                alert('author: ' + this.globalVariable)
                this.style.color = 'red'
            },
            showModal(event){
                this.$refs.inputModal.show()
            },
        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
```
