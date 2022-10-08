<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <main class="min-h-screen bg-white grid place-content-center">
    <div class="text-center">
      <h1 class="text-teal-800 font-bold text-8xl">404</h1>
      <h2 class="text-teal-700 text-xl font-semibold capitalize">
        not found page
      </h2>
      <button
        @click="router.go(-1)"
        class="bg-teal-700 text-white py-1 px-3 rounded-md mt-4 transition hover:opacity-70"
      >
        back to
      </button>
    </div>
  </main>
</template>
