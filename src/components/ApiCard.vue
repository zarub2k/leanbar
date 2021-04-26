<template>
  <figure class="md:flex bg-yellow-50 rounded-xl p-8 md:p-0 shadow-md">
    <!-- <img class="w-32 h-32 md:w-32 md:h-auto md:rounded-none rounded-full mx-auto"
      src="/images/openapi.png"
      alt=""
      width="384"
      height="512"
    > -->
    <div class="pt-6 md:p-4 text-center md:text-left space-y-4">
      <blockquote>
        <div class="flex">
          <div class="flex-grow text-lg text-yellow-800">
            {{ api.name }}
          </div>
          <div class="flex-none rounded-full bg-yellow-200 p-1">
            {{ api.version }}
          </div>
        </div>
      </blockquote>
      <p class="h-14 text-sm overflow-clip overflow-hidden">
        {{ api.description }}
      </p>
      <figcaption class="font-medium">
        <!-- <div class="text-cyan-600">
          Sarah Dayan
        </div>
        <div class="text-gray-500">
          Staff Engineer, Algolia
        </div> -->
        <ApiTags :tags="api.tags"/>
        <div class="mt-2">
          <!-- bg-gradient-to-r from-green-400 to-blue-500 -->
          <button
            class="bg-yellow-500 p-2 text-white mr-2"
          >
              Details
          </button>
          <button class="bg-gray-400 p-2 text-white">Try API</button>
        </div>
        <!-- <div
          class="bg-yellow-400 text-white text-sm rounded-full p-2"
        >
          {{ computeTag }}
        </div> -->
      </figcaption>
    </div>
  </figure>
</template>

<script>
import { computed, } from "vue";
import ApiTags from "@/components/ApiTags";

export default {
  components: {
    ApiTags,
  },
  props: {
    api: Object,
  },
  setup(props) {
    // computed(() => tag = props.api.tags ? props.api.tags[0] : "");
    const computeTag = computed(() => {
      if (props.api.tags) {
        return props.api.tags[0];
      } else {
        return "api";
      }
    });

    return {
      computeTag,
    }
  }
};
</script>
