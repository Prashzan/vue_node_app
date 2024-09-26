<template>
  <div id="app">
    <header>
      <h1>Todo List Application</h1>
    </header>
    <main>
      <TodoList />
    </main>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList
  }
};
</script>

<style>
#app {
  text-align: center;
}

header {
  background-color: #42b983;
  padding: 20px;
  color: white;
}

main {
  padding: 20px;
}
</style>
