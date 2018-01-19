<template>
    <b-modal v-bind="$attrs" :ref="modalRef" :id="$attrs['id'] ? $attrs['id'] : 'inputModalId'">
        <b-container v-if="isReady" fluid>
            <b-row v-for="(field, index) in fields" :key="index">
                <b-col>
                    <fg-input v-if="field.type !== 'bool'"
                        ref="fieldModalRef"
                        :state="field.validator ? field.validator(obj, field) : CONFIG[field.type].validator(obj, field)"
                        v-model="obj[field.propName]"
                        v-bind="field">
                    </fg-input>
                    <b-form-checkbox v-else v-model="obj[field.propName]" v-bind="field"></b-form-checkbox>
                </b-col>
            </b-row>
            <b-btn v-if="isEditing" class="btn btn-fill" variant="danger" @click="handleDelete">
                <icon name="exclamation-triangle"></icon>
                <b>Delete</b>
            </b-btn>
        </b-container>
        <div slot="modal-footer">
            <slot name="input-modal-footer">
                <b-btn class="btn btn-fill" variant="info" @click="handleOk">OK</b-btn>
                <b-btn @click="handleCancel">Cancel</b-btn>
            </slot>
        </div>
    </b-modal>
</template>


<script>

import fgInput from './formGroupInput.vue'
/*import 'vue-awesome/icons/exclamation-triangle'*/
/*import Icon from 'vue-awesome/components/Icon.vue'*/

const CONFIG = {
  "text": {
    default: "",
    validator: (obj, field) => {
      return obj[field.propName] && obj[field.propName].length >= 0
    }
  },
  "number": {
    default: 0,
    validator: (obj, field) => {
      return obj[field.propName] && !isNaN(obj[field.propName])
    },
  },
  "email": {
    default: "",
    validator: (obj, field) => {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
      return obj[field.propName] && re.test(obj[field.propName].toLowerCase())
    }
  },
  "bool": {
    default: false,
  },
}
export default {

    name: 'b-input-modal',
    components: {
        /*Icon,*/
        'fg-input': fgInput,
    },
    props: {
        fields:{
            type: Array,
            default: () => [],
        },
        value: {
            type: Object,
        },
    },
    data(){
        return{
            isEditing: false,
            isReady: false,
            CONFIG: CONFIG,
            obj: {},
        }
    },
    methods:{
      initObject(){
        if(this.fields.length == 0) return

        for (let i in this.fields) {
          let field = this.fields[i]
          this.obj[field.propName] = field.default || CONFIG[field.type].default
          /*this.obj[field.propName].validator = field.validator || CONFIG[field.type].validator*/
        }
        this.isReady = true
      },
      handleOk(event){
          if(this.$refs.fieldModalRef){

            let fieldStates = this.$refs.fieldModalRef.map(f => f.isValid())
            let state = fieldStates.reduce((prev, actual, index, arr) => prev && actual
                , true)

            if(state === false){
                return
            }
          }

          console.log("BEFORE EMITTIN") 
          this.$emit(this.isEditing ? "edit": "input", this.obj)
          /*this.$refs[this.modalRef].hide()*/
      },
      handleCancel(event){
          this.$refs[this.modalRef].hide()
      },
      handleDelete(event){
          this.$emit("delete", this.obj)
          this.$refs[this.modalRef].hide()
      },
      show(obj){
          if(obj !== undefined){
              this.obj = obj
              this.isEditing = true
          } else {
              this.obj = this.value
              this.isEditing = false
          } 
          return this.$refs[this.modalRef].show()
      },
    },
    created(){
      this.modalRef = this.$attrs['ref'] ? this.$attrs['ref'] : "inputModalRef"
      this.initObject()
    },
    beforeMount(){
    },

}
</script>
