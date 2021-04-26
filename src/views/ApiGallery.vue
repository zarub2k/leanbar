<template>
  <section class="p-4">
    <div class="bg-gradient-to-r from-green-400 to-blue-500 h-auto py-4">
      <p class="text-white text-2xl">
        Find the right APIs that meet your business needs.
      </p>
      <p class="mt-2">
        <input type="text" placeholder="Enter keyword..." class="w-1/3 p-2"/>
        <button class="bg-yellow-200 w-24 p-2">Search</button>
      </p>
    </div>
    <div
      v-if="apis && apis.length"
      class="grid grid-cols-3 gap-8 mt-2"
    >
      <ApiCard v-for="api of apis" :key="api.id" class="border" :api="api" />
    </div>
    <div v-else>No apis available</div>
  </section>
</template>
<script>
import { reactive, toRefs } from "vue";
import ApiService from "@/services/ApiService";
import ApiCard from "@/components/ApiCard";

export default {
  name: "APIGallery",
  components: {
    ApiCard,
  },
  setup() {
    const state = reactive({
      apis: [],
    });

    ApiService.apis()
      .then((response) => {
        state.apis = response.data.result;
      })
      .catch((error) => {
        console.log(error);
      });

    return {
      ...toRefs(state),
    };
  },
};
</script>
