<template>
  <div class="flex p-2 border-2 border-gray-200">
    <div class="flex-none w-64 mt-1">
      <router-link to="/">
        <img class="w-32 h-32 md:w-32 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/images/logo.png"
          alt="Fazio Logo"
        >
      </router-link>
    </div>
    <div class="flex-grow mt-2">
      <div class="flex space-x-8">
        <span class="text-yellow-600 text-lg"><router-link to="/">Home</router-link></span>
        <span class="text-yellow-600 text-lg">
          <router-link to="/apis">API Gallery</router-link></span
        >
        <span class="text-yellow-600 text-lg">
          <router-link to="/packages">Package Gallery</router-link></span
        >
      </div>
    </div>
    <div class="flex-none p-2">
      <div class="flex space-x-6">
        <div class="flex-grow">Welcome Guest!</div>
        <div class="flex-none">
          <svg xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-yellow-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  setup() {},
};
</script>
