<script setup>
import { ref } from "vue";

let date = new Date();
const year = date.getFullYear();
</script>
<template>
  <footer class="py-5 px-4 bg-teal-500">
    <div class="container text-center flex-center-between">
      <p>
        <span v-if="year > 2022">2022 - </span>
        {{ year }}
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
</style>