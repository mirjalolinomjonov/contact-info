<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import IconBase from "@/components/common/IconBase.vue";

const router = useRouter();

// DATA
const rootPassword = ref(null);
const isShowPassword = ref(false);
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

function viewPassword() {
  if (rootPassword.value[1].type === "password") {
    rootPassword.value[1].type = "text";
    isShowPassword.value = true;
  } else {
    rootPassword.value[1].type = "password";
    isShowPassword.value = false;
  }
}
</script>

<template>
  <div class="grid place-content-center min-h-screen bg-teal-100">
    <form
      @submit.prevent="onSubmit"
      class="p-3 rounded-md bg-white border shadow-md flex flex-col gap-4"
    >
      <label v-for="(item, index) in options" :key="index" class="relative">
        <input
          ref="rootPassword"
          class="
            p-2
            border
            rounded
            focus-visible:outline-none focus-visible:shadow
            transition
          "
          :type="item.type"
          :placeholder="item.placeholder"
          v-model="auth[item.vm]"
        />
        <span
          @click="viewPassword"
          v-if="item.type === 'password'"
          class="
            absolute
            top-1/2
            right-2
            -translate-y-1/2
            cursor-pointer
            inline-flex
            items-center
            justify-center
            eye
          "
        >
          <icon-base name="eye" color="#0d9488" />
          <span
            class="eye__line"
            :class="{ 'is-active': isShowPassword }"
          ></span>
        </span>
      </label>

      <!-- submit btn -->
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

<style lang="scss" scoped>
.eye {
  width: 20px;
  height: 20px;
  &__line {
    width: 100%;
    height: 1px;
    background-color: #0d9488;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    transition: all 0.3s linear;
    &.is-active {
      opacity: 0;
    }
  }
}
</style>