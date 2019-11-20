<template>
    <div class="task-grid">
        <template>
            <Task v-for="task in tasks" :key="task.name" :task="task" />
        </template>
    </div>
</template>

<script>
import Task from "@/components/Task";

export default {
    components: {
        Task
    },

    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>