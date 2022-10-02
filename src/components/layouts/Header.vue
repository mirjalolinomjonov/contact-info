<script setup>
import { ref } from "vue";

// navbar
const nav = ref([
  {
    name: "home",
    link: "/",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "table",
    link: "/table",
  },
]);
</script>

<template>
  <header class="bg-teal-500 shadow-md">
    <div class="container flex-center-between py-5 px-4">
      <div>
        <router-link to="/" class="text-white font-semibold text-2xl uppercase">
          dashboard
        </router-link>
      </div>
      <nav class="inline-flex items-center gap-7">
        <ul class="flex gap-5">
          <li v-for="(item, index) in nav" :key="index">
            <router-link :to="item.link" class="text-white text-4 font-semibold capitalize transition hover:text-teal-700">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
        <button class="px-4 py-2 bg-blue-500 rounded-md text-white capitalize font-semibold transition hover:opacity-70">
          <span v-if="false">login</span>
          <span v-else>logout</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
</style>