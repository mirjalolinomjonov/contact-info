<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

import Table from "@/components/Table.vue";
import Failer from "@/components/Failer.vue";

const store = useStore();

// ======= DATA =======
const tags = ref([
  {
    value: 0,
    tag: "filter by tag",
  },
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

const filterOptions = ref([
  {
    vm: "name",
    type: "text",
    placeholder: "mirjalol inomjonov",
  },
  {
    vm: "phone",
    type: "number",
    placeholder: "+998 00 000 00 00",
  },
  {
    vm: "email",
    type: "text",
    placeholder: "example@gmail.com",
  },
  {
    vm: "tag",
    type: "select",
    tags: [
      {
        value: 0,
        tag: "filter by tag",
      },
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
    ],
  },
]);

const filterData = ref({
  name: "",
  phone: "",
  email: "",
  tag: 0,
});

// ======= COMPUTED ============
const contacts = computed(() => store.state.contacts);

let searchContacts = computed(() => {
  return contacts.value.filter((contact) => {
    return (
      contact.name
        .toLowerCase()
        .includes(filterData.value.name.toLowerCase()) &&
      contact.phone.includes(filterData.value.phone) &&
      contact.email
        .toLowerCase()
        .includes(filterData.value.email.toLowerCase()) &&
      contact.tag
        .toString()
        .includes(
          filterData.value.tag === 0 ? "" : filterData.value.tag.toString()
        )
    );
  });
});

// ======= LIFECYCLE HOOKS ============
onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<template>
  <main class="container min-h-screen py-4">
    <!-- filter form -->
    <form class="flex-center gap-4 p-3 flex-wrap">
      <div v-for="(item, index) in filterOptions" :key="index">
        <input
          v-if="item.type !== 'select'"
          type="text"
          :placeholder="item.placeholder"
          v-model="filterData[item.vm]"
          v-maska="item.type == 'number' ? '+998 ## ### ## ##' : ''"
          class="
            border
            px-3
            py-2
            rounded-md
            text-teal-700
            focus-visible:outline-none focus-visible:border-teal-800
            placeholder:capitalize
          "
        />
        <select
          v-else
          v-model="filterData[item.vm]"
          name="tag"
          id="tag"
          class="
            border
            px-3
            py-2
            rounded-md
            text-teal-700
            focus-visible:outline-none focus-visible:border-teal-800
            placeholder:capitalize
            bg-white
            capitalize
          "
          :class="{ 'text-gray-400': !filterData.tag }"
        >
          <option
            :value="item.value"
            v-for="(item, index) in tags"
            :key="index"
            :disabled="!item.value"
          >
            {{ item.tag }}
          </option>
        </select>
      </div>
    </form>

    <!-- table -->
    <Table
      v-if="searchContacts && searchContacts.length"
      :contacts="searchContacts"
    />
    <Failer v-else />
    <router-link
      to="/create"
      class="
        py-3
        px-4
        mt-4
        inline-block
        rounded-md
        bg-teal-500
        text-white
        font-semibold
        text-base
        transition
        hover:bg-teal-600
        capitalize
      "
    >
      create contact
    </router-link>
  </main>
</template>

