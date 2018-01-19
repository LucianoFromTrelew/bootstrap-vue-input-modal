import { mount } from '@vue/test-utils'
import InputModal from "../src/InputModal.vue"
import fgInput from "../src/formGroupInput.vue"

describe('InputModal.vue', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(InputModal)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('it has a b-btn', () => {
    const wrapper = mount(InputModal)
    expect(wrapper.contains('b-btn')).toBeTruthy()
    expect(wrapper.contains('button')).toBeFalsy()
  })
  it('it has a b-modal', () => {
    const wrapper = mount(InputModal)
    expect(wrapper.contains('b-modal')).toBeTruthy()
  })
  it('it has no fields', () => {
    const wrapper = mount(InputModal)
    expect(wrapper.findAll('fg-group')).toHaveLength(0)
    expect(wrapper.props().fields).toHaveLength(0)
    expect(wrapper.contains('fg-group')).toBeFalsy()
  })
  it('isEditing is false', () => {
    const wrapper = mount(InputModal)
    expect(wrapper.vm.isEditing).toBeFalsy()
  })
  it('isReady is false', () => {
    const wrapper = mount(InputModal)
    expect(wrapper.vm.isReady).toBeFalsy()
    expect(wrapper.contains('b-container')).toBeFalsy()
  })
  it('Trying with fields', () => {
    const wrapper = mount(InputModal, {
      propsData: {
        fields: [
          {
            type: 'text',
            propName: 'name',
            validator: (obj, field) => {
              return obj.name.length > 20
            },
            default: 'Juancho Pancho'
          }
        ]
      }
    })
    expect(wrapper.props().fields).toHaveLength(1)
    expect(wrapper.findAll(fgInput)).toHaveLength(1)
    expect(wrapper.find(fgInput).isVueInstance()).toBeTruthy()
    expect(wrapper.vm.isReady).toBeTruthy()
    expect(wrapper.contains('b-container')).toBeTruthy()
    expect(wrapper.contains('b-form-input')).toBeTruthy()
    expect(wrapper.findAll('b-form-input')).toHaveLength(1)
    expect(wrapper.findAll('b-form-input')).not.toHaveLength(0)
    expect(wrapper.findAll('b-form-input')).not.toHaveLength(2)
  })
  it('emiting input', () => {
    const wrapper = mount(InputModal, {
      propsData: {
        fields: [
          {
            type: 'text',
            default: 'juancho pancho',
            propName: 'name'
          }
        ]
      }
    }) 
    const btn = wrapper.find('b-btn')
    btn.trigger('click')
    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('input')[0]).toEqual([{name: 'juancho pancho'}])
    expect(wrapper.emitted('input')[0]).not.toEqual([{name: ''}])
  })
  it('Testing validators (NOT EMITTING)', () => {
    const wrapper = mount(InputModal, {
      propsData: {
        fields: [
          {
            type: 'text',
            default: 'asdas',
            validator: (obj, field) => {
              return obj.name.length > 10
            },
            propName: 'name'
          }
        ]
      }
    }) 
    const btn = wrapper.find('b-btn')
    btn.trigger('click')
    expect(wrapper.emitted('input')).toBeFalsy()
  })
  it('Testing validators (EMITTING)', () => {
    const wrapper = mount(InputModal, {
      propsData: {
        fields: [
          {
            type: 'text',
            default: 'Luciano Serruya Aloisi',
            validator: (obj, field) => {
              return obj.name.length > 10
            },
            propName: 'name'
          }
        ]
      }
    }) 
    const btn = wrapper.find('b-btn')
    btn.trigger('click')
    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('input')[0]).toEqual([{name: 'Luciano Serruya Aloisi'}])
    expect(wrapper.emitted('input')[0]).not.toEqual([{name: 'Juancho'}])
  })
  it('Testing bool', () => {
    const wrapper = mount(InputModal, {
      propsData: {
        fields: [
          {
            type: 'bool',
            propName: 'isActive'
          }
        ]
      }
    }) 
    expect(wrapper.findAll("b-form-input")).toHaveLength(0)
    expect(wrapper.findAll("b-form-checkbox")).toHaveLength(1)
    //const btn = wrapper.find('b-btn')
    //btn.trigger('click')
    //expect(wrapper.emitted('input')).toBeTruthy()
    //expect(wrapper.emitted('input')[0]).toEqual([{name: 'Luciano Serruya Aloisi'}])
    //expect(wrapper.emitted('input')[0]).not.toEqual([{name: 'Juancho'}])
  })
  it('Checking the checkbox', () => {
    const wrapper = mount(InputModal, {
      propsData: {
        fields: [
          {
            type: 'bool',
            propName: 'isActive'
          }
        ]
      }
    }) 
    const cb = wrapper.find("b-form-checkbox")
    expect(cb.is("b-form-checkbox")).toBeTruthy()
    //expect(cb.props().value).toBeTruthy()

    //cb.setProps({value: true})

    //const btn = wrapper.find('b-btn')
    //btn.trigger('click')
    //expect(wrapper.emitted('input')).toBeTruthy()
    //expect(wrapper.emitted('input')[0]).toEqual([{isActive: true}])
    //expect(wrapper.emitted('input')[0]).not.toEqual([{name: 'Juancho'}])
  })
  //it('Setting props', () => {
    //const wrapper = mount(InputModal, {
      //propsData: {
        //fields: [
          //{
            //type: 'text',
            //default: 'juaza',
            ////validator: (obj, field) => {
              ////return obj.name.length > 10
            ////},
            //propName: 'name'
          //}
        //]
      //}
    //}) 
    //const field = wrapper.find(fgInput)
    //expect(field.is(fgInput)).toBeTruthy()
    //expect(field.vm.value).toEqual("juaza")

    //const inputField = field.find('b-form-input')
    //expect(inputField.is('b-form-input')).toBeTruthy()

    //field.setProps({ value: "Luciano" })
    //expect(field.vm.value).toEqual("Luciano")
    //field.trigger('input')
    //expect(field.vm.handleInput).toBeCalled()

    //const btn = wrapper.find('b-btn')
    //btn.trigger('click')
    //expect(wrapper.emitted('input')).toBeTruthy()
    //expect(wrapper.emitted('input')[0]).toEqual([{name: 'Luciano'}])
    //expect(wrapper.emitted('input')[0]).not.toEqual([{name: 'Juancho'}])
  //})
})
