<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="text-6xl">Tham</h1> -->
    <Branding />
  </div>
</template>

<script>
// @ is an alias to /src
import Branding from "@/components/Branding.vue";

export default {
  name: "Home",
  components: {
    Branding,
  },
};
</script>
