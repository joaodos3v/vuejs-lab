<template>
  <div class="card" :class="{completed}">
    <button @click="deleteTask">X</button>
    <p @click="toggleCompleted">{{ description }}</p>
  </div>
</template>

<script>
import Bus from "@/Bus.js";

export default {
  props: {
    description: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    deleteTask() {
      Bus.deleteTask(this.description);
    },
    toggleCompleted() {
      Bus.toggleCompletedTask(this.description);
    }
  }
}
</script>

<style>
.card {
  background-color: red;
  border-left: 10px solid #920b0b;
  border-radius: 5px;
  padding: 5px 20px;
  max-width: 200px;
}

.card button {
  background-color: #920b0b;
  color: #FFF;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  float: right;
  cursor: pointer;
}

.card p {
  font-size: 1.8em;
  word-wrap: break-word;
}

/* Quando a tarefa estiver concluída, sobescreve alguns estilos */
.completed {
  background-color: green;
  border-left-color: #1f641e;
}

.completed button {
  background-color: #1f641e;
}

.completed p {
  text-decoration: line-through;
}
</style>