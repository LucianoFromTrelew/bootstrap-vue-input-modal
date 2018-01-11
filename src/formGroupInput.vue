<template>
  <div class="form-group">
    <label v-if="label">
      {{label}}
    </label>
    <b-form-input v-if="$attrs['type'] !== 'bool'" 
           class="form-control border-input"
           v-bind="$attrs"
           aria-describedby="inputLiveFeedback"
           :value="value"
           @input="handleInput">
    </b-form-input>
    <b-form-checkbox v-else
           class="form-control border-input"
           v-bind="$attrs"
           :value="value"
           @input="handleInput">
    </b-form-checkbox>
    <b-form-invalid-feedback id="inputLiveFeedback" v-text="$attrs['errorMessage'] ? $attrs['errorMessage'] : 'This field is invalid'"></b-form-invalid-feedback>
  </div>
</template>
<script>
  export default {
    inheritAttrs: false,
    props: {
      value: [String, Number, Boolean],
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
