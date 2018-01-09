<template>
    <b-modal v-bind="$attrs" :ref="modalRef" :id="$attrs['id'] ? $attrs['id'] : 'inputModalId'">
        <b-container fluid>
            <b-row v-for="(field, index) in fields" :key="index">
                <b-col>
                    <fg-input
                        ref="fieldModalRef"
                        :state="field.validator ? field.validator(obj, field) : true"
                        v-model="obj[field.propName]"
                        v-bind="field">
                    </fg-input>
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
import 'vue-awesome/icons/exclamation-triangle'
import Icon from 'vue-awesome/components/Icon.vue'

export default {

    name: 'b-input-modal',
    components: {
        Icon,
        'fg-input': fgInput,
    },
    props: {
        fields:{
            type: Array,
        },
        value: {
            type: Object,
        },
    },
    data(){
        return{
            isEditing: false,
            obj: {},
        }
    },
    methods:{
        handleOk(event){
            let fieldStates = this.$refs.fieldModalRef.map(f => f.isValid())
            let state = fieldStates.reduce((prev, actual, index, arr) => prev && actual
                , true)

            if(state === false){
                return
            }

            this.$emit(this.isEditing ? "edit": "input", this.obj)
            this.$refs[this.modalRef].hide()
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
    },
    beforeMount(){
        this.obj = this.value
    },

}
</script>
