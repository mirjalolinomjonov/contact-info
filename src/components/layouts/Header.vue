<script setup>
import { ref } from "vue";

// DATA
const nav = ref([
  {
    name: "home",
    link: "/",
  },
  {
    name: "table",
    link: "/table",
  },
  {
    name: "about",
    link: "/about",
  },
]);
let isNav = ref(false);

// METHODS
function openNavbar() {
  isNav.value = true;
}

function closeNavbar() {
  isNav.value = false;
}
</script>

<template>
  <header class="bg-teal-500 shadow-md">
    <div class="container flex-center-between py-5">
      <div>
        <router-link to="/" class="text-white font-semibold text-2xl uppercase">
          dashboard
        </router-link>
      </div>
      <nav
        class="nav inline-flex items-center sm:justify-center gap-7"
        :class="{ 'is-active': isNav }"
      >
        <ul class="flex gap-5">
          <li v-for="(item, index) in nav" :key="index">
            <router-link
              :to="item.link"
              class="
                text-white text-4
                font-semibold
                capitalize
                transition
                hover:text-teal-700
              "
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
        <button
          class="
            px-4
            py-2
            bg-blue-500
            rounded-md
            text-white
            capitalize
            font-semibold
            transition
            hover:opacity-70
          "
        >
          <span v-if="false">login</span>
          <span v-else>logout</span>
        </button>

        <!-- close navbar btn -->
        <button
          @click="closeNavbar"
          class="
            hidden
            absolute
            top-1/2
            right-5
            -translate-y-1/2
            sm:inline-block
            text-white text-4xl
            font-bold
          "
        >
          x
        </button>
      </nav>
      <!-- open navbar btn -->
      <button
        @click="openNavbar"
        class="
          hidden
          sm:inline-flex
          flex-col
          items-center
          justify-around
          w-8
          h-8
          p-2
          rounded-full
          shadow-md
        "
      >
        <div
          class="w-full h-[2px] bg-white rounded-sm"
          v-for="item in 3"
          :key="item"
        ></div>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.is-active {
  top: 0 !important;

}

@media screen and (max-width: 640px) {
  .nav {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 72px;
    z-index: 9999;
    background: #212121;
    transition: all .5s ease-in-out;
  }
}
</style>