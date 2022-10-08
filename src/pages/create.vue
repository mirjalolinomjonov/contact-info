<script setup>
import { ref, computed, onBeforeMount, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const route = useRoute();
const router = useRouter();

// ========== DATA ==========
// input options
const options = ref([
  {
    vm: "name",
    type: "text",
    label: "full name",
    placeholder: "mirjalol inomjonov",
  },
  {
    vm: "phone",
    type: "number",
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
const contact = ref({
  name: "",
  phone: "",
  email: "",
  tag: 0,
});

// ========== COMPUTED METHOD ==========
const contacts = computed(() => store.state.contacts);

// ========== METHODS ==========
function addContact() {
  if (
    contact.value.name &&
    contact.value.phone &&
    contact.value.email &&
    contact.value.tag
  ) {
    if (!route.params.slug) {
      store.commit("CREATE_CONTACT", {
        name: contact.value.name,
        phone: contact.value.phone,
        email: contact.value.email,
        tag: contact.value.tag,
      });
      contact.value.name = "";
      contact.value.phone = "";
      contact.value.email = "";
      contact.value.tag = 0;
    } else {
      store.commit("EDIT", {
        index: route.params.slug,
        contact: contact.value,
      });
    }
    router.push({ name: "table" });
  } else {
    alert("Bo'sh joylarni to'ldiring!");
  }
}

// ========== LIFECYCLE HOOKS==========
onBeforeMount(() => {
  const slug = route.params.slug;
  try {
    if (slug && slug < contacts.value.length) {
      contact.value = contacts.value[slug];
    }
  } catch (error) {
    console.log("error", error);
  }
});
</script>

<template>
  <main class="bg-teal-50 min-h-screen grid place-content-center">
    <form
      @submit.prevent="addContact"
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
          v-model="contact[item.vm]"
          v-maska="item.type == 'number' ? '+998 ## ### ## ##' : ''"
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
          v-model="contact[item.vm]"
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
          :class="{ 'text-gray-400': contact.tag == 0 }"
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

      <!-- submit btn -->
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
  </main>
</template>