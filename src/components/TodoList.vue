<template>
  <div class="md-layout">
    <div class="md-layout-item">
    <md-list>
      <md-list-item v-for="todo in todos" :key="todo.id">
        <span class="md-list-item-text">{{todo.title}}</span>
      </md-list-item>
    </md-list>
    </div>  
    <div class="md-layout-item">
    <md-button class="md-fab md-fab-bottom-right md-primary" @click="addTodo">
      <md-icon>add</md-icon>
    </md-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: []
    }
  },
  methods: {
    addTodo() {
      this.$router.push({path: '/todos/add'})
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.todos = res.data)
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log('todos length', this.todos.length)
  },
}</script>

<style lang="scss" scoped>
.todo-fab {
  position: fixed;
  bottom: 25px;
  right: 15px;
  font-size: 30px;
}

.content {
  padding: 10px 10px 10px 0px
}
</style>
