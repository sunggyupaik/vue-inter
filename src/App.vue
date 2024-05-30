<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" 
        v-on:removeTodoItem="removeOneItem"
        v-on:toggleTodoItem="toggleOneItem">
    </TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(newTodoItem) {
        const obj = { completed: false, item: newTodoItem };
        localStorage.setItem(newTodoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
        //todoItem.completed = !todoItem.completed; 안티패턴
        this.todoItems[index].completed = !this.todoItems[index].completed;
        //localStorage.removeItem(todoItem.item); 불필요
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
        localStorage.clear();
        this.todoItems = [];
    }
  }
}
</script>

<style>
</style>
