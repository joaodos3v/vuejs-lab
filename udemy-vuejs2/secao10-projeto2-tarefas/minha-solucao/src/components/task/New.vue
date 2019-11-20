<template>
  <div class="new-task">
    <input type="text" v-model="description" @keyup.enter="create" placeholder="Nova tarefa?" >
    <button @click="create">+</button>
  </div>
</template>

<script>
import Bus from "@/Bus.js";

export default {
  data() {
    return {
      description: null
    }
  },

  methods: {
    create() {
      const newTask = {description: this.description, completed: false};
      Bus.addTask(newTask);
      this.description = "";
    }
  }
}
</script>

<style>
.new-task {
  margin: 3%;
  border: 1px solid #dfd8d8;
  border-radius: 5px;
  display: flex;
}

.new-task input {
  border: none;
  color: #FFF;
  background-color: #58585859;
  padding: 10px;
  font-size: 1.5em;
}

.new-task button {
  border: none;
  color: #FFF;
  outline: none;
  background-color: #59a3d4;
  font-size: 2em;
  cursor: pointer;
}
</style>