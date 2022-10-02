<script setup>
import { ref } from "vue";

// Tags options
const tags = ref([
  {
    value: 1,
    tag: "family",
  },
  {
    value: 2,
    tag: "work",
  },
  {
    value: 3,
    tag: "friends",
  },
]);
</script>

<template>
  <main>
    <form>
      <input type="text" placeholder="filter by name" />
      <input type="text" placeholder="filter by phone" />
      <input type="text" placeholder="filter by email" />
      <select name="tag" id="tag">
        <option :value="item.value" v-for="(item, index) in tags" :key="index">
          {{ item.tag }}
        </option>
      </select>
    </form>

    <router-link to="/create">create contact</router-link>
  </main>
</template>

<style lang="scss" scoped>
</style>