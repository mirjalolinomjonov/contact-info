<script setup>
import { defineProps } from "vue";

const props = defineProps({
  count: Number,
  description: String,
});
</script>

<template>
  <div class="w-full border p-3 shadow-md rounded-md flex justify-between">
    <h2 class="text-teal-800">{{ description }}</h2>
    <span class="text-teal-700 font-bold">{{ count }}</span>
  </div>
</template>


<style lang="scss" scoped>
</style>