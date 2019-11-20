import Vue from "vue";

export default new Vue({
  data: {
    tasks: []
  },

  computed: {
    completed() {
      return this.tasks.filter(task => task.completed).length;
    },
  },

  methods: {
    addTask(newTask) {
      const hasEqual = this.tasks.some(task => task.description == newTask.description);
      if (!hasEqual) {
        this.tasks.push(newTask);
        this.$emit("tasksUpdated", newTask);
      }
    },
    deleteTask(description) {
      const index = this.tasks.findIndex(task => task.description == description);
      this.tasks.splice(index, 1);
      this.$emit("tasksUpdated");
    },
    toggleCompletedTask(description) {
      const index = this.tasks.findIndex(task => task.description == description);
      this.tasks[index].completed = !this.tasks[index].completed;
      this.$emit("tasksUpdated");
    },
    onTasksUpdated(cbk) {
      this.$on("tasksUpdated", cbk);
    },
  }
});