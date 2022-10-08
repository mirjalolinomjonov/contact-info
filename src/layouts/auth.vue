<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// DATA
const options = ref([
  {
    vm: "login",
    type: "text",
    placeholder: "login",
  },
  {
    vm: "password",
    type: "password",
    placeholder: "****",
  },
]);

const auth = ref({
  login: "",
  password: "",
});

const admin = ref({
  login: "admin",
  password: "1234",
});

// METHODS
function onSubmit() {
  if (
    admin.value.login === auth.value.login &&
    admin.value.password === auth.value.password
  ) {
    localStorage.setItem("token", "value_token");
    router.push({ name: "home" });
  } else {
    alert("Login or passwor is incorrect!");
  }
}
</script>

<template>
  <div class="grid place-content-center min-h-screen bg-teal-100">
    <form
      @submit.prevent="onSubmit"
      class="p-3 rounded-md bg-white border shadow-md flex flex-col gap-4"
    >
      <input
        class="
          p-2
          border
          rounded
          focus-visible:outline-none focus-visible:shadow
          transition
        "
        :type="item.type"
        v-for="(item, index) in options"
        :key="index"
        :placeholder="item.placeholder"
        v-model="auth[item.vm]"
      />
      <button
        class="
          bg-teal-500
          text-white
          p-2
          rounded-md
          transition
          hover:opacity-70
        "
      >
        Submit
      </button>
    </form>
  </div>
</template>