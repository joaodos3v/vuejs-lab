<template>
  <div class="progress-bar">
    <div class="progress" :style="{width: percentage + '%'}">
      {{ percentage }}%
    </div>
  </div>
</template>

<script>
import Bus from "@/Bus.js";

export default {
  computed: {
    percentage() {
      const {completed, tasks} = Bus;
      if (!tasks.length) return 0;
      return Math.round((completed / tasks.length) * 100);
    }
  }
}
</script>

<style>
.progress-bar {
  display: flex;
  width: 80%;
  border: 1.5px solid #c4bcbc;
  border-radius: 5px;
  text-align: center;
}

.progress {
  height: 100%;
  background-color: #2aaf2a;
  color: #FFF;
  font-size: 1.3em;
}
</style>