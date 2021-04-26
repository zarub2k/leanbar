<template>
  <div class="flex space-x-2" v-if="tags">
    <span v-for="tag in tags" :key="tag" class="text-sm text-yellow-500">
      {{ tag }}
    </span>
  </div>
  <div v-else>
    <span class="text-sm text-yellow-500">api</span>
  </div>
</template>

<script>
export default {
  props: {
    tags: []
  }
}
</script>