<template>
  <h3 v-if="!tasks.length">Sua vida está em dia :)</h3>
  <ul v-else>
    <li v-for="task in tasks" :key="task.description">
      <Task :description="task.description" :completed="task.completed" />
    </li>
  </ul>
</template>

<script>
import Task from "@/components/task/Task";
import Bus from "@/Bus.js";

export default {
  components: {
    Task
  },

  data() {
    return {
      tasks: []
    };
  },

  created() {
    Bus.onTasksUpdated(() => {
      this.tasks = Bus.tasks;
    });
  }
};
</script>

<style scoped>
h3 {
  color: #969393;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

ul li {
  margin-right: 5%;
}
</style>