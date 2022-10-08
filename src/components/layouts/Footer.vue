<script setup>
import { ref } from "vue";

let date = new Date();
const year = date.getFullYear();
</script>

<template>
  <footer class="py-5 bg-teal-500">
    <div class="container text-center">
      <p class="text-white">
        Copyright &copy;
        {{ year > 2022 ? `2022 - ${year}` : year }}
        Mirjalol Inomjonov
      </p>
    </div>
  </footer>
</template>