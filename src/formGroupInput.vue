<template>
  <div class="form-group">
    <label v-if="label">
      {{label}}
    </label>
    <b-form-input class="form-control border-input"
           v-bind="$attrs"
           aria-describedby="inputLiveFeedback"
           :value="value"
           @input="handleInput">
    </b-form-input>
    <b-form-invalid-feedback id="inputLiveFeedback" v-text="$attrs['errorMessage'] ? $attrs['errorMessage'] : 'This field is invalid'"></b-form-invalid-feedback>
  </div>
</template>
<script>
  export default {
    inheritAttrs: false,
    props: {
      value: [String, Number],
      label: String
    },
    methods: {
        handleInput(val){
            this.$emit('input', val)
        },
        isValid(){
            return this.$attrs['state']
        },
    },
    created(){
    },
  }

</script>
<style>

</style>
