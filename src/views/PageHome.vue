<!-- PageHome.vue -->
<template>
  <div class="home">
    <PageMain />
  </div>
</template>

<script>
// @ is an alias to /src
import PageMain from "@/components/PageMain.vue";

export default {
  name: "PageHome",
  components: {
    PageMain,
  },
};
</script>
