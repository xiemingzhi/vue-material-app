<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
     -->
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-dense md-primary">
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>

          <span class="md-title">My Title</span>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          Navigation
        </md-toolbar>

        <md-list>
          <md-list-item to="/todos" @click="menuVisible = !menuVisible">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <!-- <TodoList /> -->
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    //HelloWorld
    //TodoList
  },
  data: () => ({
    menuVisible: false
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
/*.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, .12);
}*/
</style>
