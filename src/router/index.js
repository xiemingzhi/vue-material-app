import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoList from '../components/TodoList';
import AddTodoItem from '../components/AddTodoItem';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/todos', name: 'todos', component: TodoList },
  { path: '/todos/add', name: 'todos-add', component: AddTodoItem}
]

const router = new VueRouter({
  routes
})

export default router
