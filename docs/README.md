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
                <b-table striped hover :items='users' @row-clicked="handleRowClick"></b-table>
                <b-btn variant='success' v-b-modal.input-modal>New user</b-btn>
                <b-input-modal v-model='user' ref="inputModal" :id="'input-modal'" :fields='fields' @input='createUser' @delete='deleteUser'></b-input-modal>
            </div>
        </div>
    </div>
</template>

<script>

    const users = [
      { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
    ]
    export default {
        data() {
            return {
                author: 'Luciano Serruya Aloisi',
                style: {
                    color: 'blue'
                },
                users: users,
                user: {
                    isActive: 'true',
                    age: 18,
                    first_name: '',
                    last_name: '',
                    email: '',
                },
                fields: [
                    {
                        type: 'text',
                        label: 'Is active?',
                        propName: 'isActive',
                    },
                    {
                        type: 'number',
                        label: 'Age',
                        min: 18,
                        propName: 'age',
                    },
                    {
                        type: 'text',
                        label: 'First name',
                        propName: 'first_name',
                    },
                    {
                        type: 'text',
                        label: 'Last name',
                        propName: 'last_name',
                    },
                    //{
                    //    type: 'text',
                    //    label: 'email',
                    //    validator: (obj, field) => {
                    //        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    //        return re.test(obj.email.toLowerCase());
                    //    },
                    //    propName: 'email',
                    //},

                ],
            }
        },
        methods: {
            onClick() {
                alert('author: ' + this.author)
                this.style.color = 'red'
            },
            showModal(event){
                this.$refs.inputModal.show()
            },
            handleRowClick(row, index, event){
                this.$refs.inputModal.show(row)
            },
            createUser(user){
                console.log(user)
                this.users.push({
                    isActive: user.isActive.toLowerCase() === 'true' ? true : false,
                    age: parseInt(user.age),
                    first_name: user.first_name,
                    last_name: user.last_name
                })
            },
            deleteUser(user){
            }
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
