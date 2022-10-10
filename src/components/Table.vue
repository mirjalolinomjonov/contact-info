<script setup>
import { ref, defineProps, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

// ======= COMPONENTS IMPORT =========
import IconBase from "@/components/common/IconBase.vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

// ======= DATA =========
const thead = ref(["full name", "phone", "email", "tags", "action"]);

// ======= PROPS =========
const props = defineProps({
  contacts: Array,
});

// ======= METHODS ============
function remove(index) {
  store.commit("REMOVE", index);
}

function edit(index) {
  route.params.slug = index;
  router.push({ name: "edit" });
}

// ======= LIFECYCLE HOOKS ============
onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<template>
  <table class="w-full text-left border-spacing-y-4 border-separate md:!overflow-x-scroll">
    <thead class="text-teal-600 capitalize">
      <tr>
        <th v-for="(item, index) in thead" :key="index" class="p-2">
          {{ item }}
        </th>
      </tr>
    </thead>

    <tbody class="text-teal-900">
      <tr v-for="(item, index) in contacts" :key="index">
        <td>
          {{ item.name }}
        </td>
        <td>
          {{ item.phone }}
        </td>
        <td>
          {{ item.email }}
        </td>
        <td>
          {{
            item.tag === 1
              ? "family"
              : item.tag == 2
              ? "work"
              : item.tag == 3
              ? "friend"
              : ""
          }}
        </td>
        <td class="inline-flex gap-3">
          <button @click="edit(index)">
            <icon-base name="edit" color="#5096ec" />
          </button>
          <button @click="remove(index)">
            <icon-base name="delete" color="red" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
tbody {
  tr {
    transition: all 0.25s ease-in-out;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 2px 10px 1px #f1f5f9;
    }
  }

  td {
    padding: 8px 12px;
    border-top: 1px solid #14b8a6;
    border-bottom: 1px solid #14b8a6;
    &:first-child {
      border-left: 1px solid #14b8a6;
      border-radius: 6px 0 0 6px;
      text-transform: capitalize;
    }
    &:nth-child(4) {
      text-transform: capitalize;
    }
    &:last-child {
      border-radius: 0 6px 6px 0;
      border-right: 1px solid #14b8a6;
    }
  }
}
</style>