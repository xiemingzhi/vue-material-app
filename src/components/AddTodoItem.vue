<template>
<div>
    <md-field>
      <label>Initial Value</label>
      <md-input :value="name" ref="newTodoItem" @input="updateTodoName" placeholder="Todo Name"></md-input>
    </md-field>
    <md-button class="md-fab md-primary" @click="addTodo">
      <md-icon>check</md-icon>
    </md-button>
</div>    
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    addTodo() {
      const newTodo = { name: this.name }
      axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
        .then(res => {
          // eslint-disable-next-line no-console
          console.log('addtodo', res)
          this.$router.push({path: '/todos'})
        })
    },
    updateTodoName() {
      this.name = this.$refs.newTodoItem.value
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-fab {
  position: fixed;
  bottom: 25px;
  right: 15px;
  font-size: 30px;
}
</style>