<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newTask" placeholder="Enter a new task" />
    <button @click="addTask">Add Task</button>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.description }}
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      const response = await axios.get('http://localhost:3000/api/tasks');
      this.tasks = response.data;
    },
    async addTask() {
      if (this.newTask) {
        const response = await axios.post('http://localhost:3000/api/tasks', {
          description: this.newTask
        });
        this.tasks.push(response.data);
        this.newTask = '';
      }
    },
    async deleteTask(id) {
      await axios.delete(`http://localhost:3000/api/tasks/${id}`);
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  }
};
</script>

<style scoped>
input {
  margin-right: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

button {
  margin-left: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #ff1a1a;
}
</style>
