<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import Status from "@/components/cards/Status.vue";

const store = useStore();

// DATA
const status = ref([
  {
    count: store.state.contacts.length,
    description: "All contacts",
  },
  {
    count: store.getters.getFamily.length,
    description: "Number of family",
  },
  {
    count: store.getters.getWork.length,
    description: "Number of work",
  },
  {
    count: store.getters.getFriends.length,
    description: "Number of friends",
  },
]);

// METHODS

// LIFECYCLE HOOKS
</script>

<template>
  <main class="min-h-screen container py-4">
    <h1 class="text-teal-500 font-semibold text-3xl">Status of contacts</h1>
    <hr class="mt-4 mb-7" />
    <div class="grid grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
      <Status
        v-for="(item, index) in status"
        :key="index"
        :count="item.count"
        :description="item.description"
      />
    </div>
  </main>
</template>
