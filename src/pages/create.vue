<script setup>
import { ref } from "vue";

// input options
const options = ref([
  {
    vm: "fullName",
    type: "text",
    label: "full name",
    placeholder: "mirjalol inomjonov",
  },
  {
    vm: "phone",
    type: "text",
    label: "phone number",
    placeholder: "+998 00 000 00 00",
  },
  {
    vm: "email",
    type: "text",
    label: "email",
    placeholder: "example@gmail.com",
  },
  {
    vm: "tag",
    type: "select",
    label: "tags",
    tags: [
      {
        value: 0,
        name: "select tag",
      },
      {
        value: 1,
        name: "family",
      },
      {
        value: 2,
        name: "work",
      },
      {
        value: 3,
        name: "friend",
      },
    ],
  },
]);

// form data
const formData = ref({
  fullName: "",
  phone: "",
  email: "",
  tag: 0,
});
</script>

<template>
  <main class="bg-teal-100 min-h-screen grid place-content-center">
    <form
      @submit.prevent="submit"
      class="w-[500px] p-4 rounded-xl bg-white flex flex-col gap-4"
    >
      <div
        class="flex flex-col gap-1"
        v-for="(item, index) in options"
        :key="index"
      >
        <label
          :for="item.label"
          class="
            cursor-pointer
            text-teal-800
            font-semibold
            text-base
            capitalize
          "
        >
          {{ item.label }}
        </label>
        <input
          v-if="item.type !== 'select'"
          v-model="formData[item.vm]"
          v-maska="'+998 ## ### ## ##'"
          type="text"
          :id="item.label"
          :placeholder="item.placeholder"
          autocomplete="off"
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
          v-model="formData[item.vm]"
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
          :class="{ 'text-gray-400': formData.tag == 0 }"
        >
          <option
            :value="tag.value"
            :disabled="tag.value == 0"
            v-for="(tag, index) in item.tags"
            :key="index"
          >
            {{ tag.name }}
          </option>
        </select>
      </div>
      <button
        class="
          py-3
          px-4
          text-white
          bg-teal-500
          rounded-md
          font-semibold
          text-lg
          capitalize
          transition
          hover:opacity-70
        "
      >
        add contact
      </button>
    </form>

    <pre>{{ formData }}</pre>
  </main>
</template>

<style lang="scss" scoped>
</style>