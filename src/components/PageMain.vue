<template>
  <div class="Main">
    <PageHome />
  </div>
</template>

<script>
// @ is an alias to /src
import PageHome from "@/views/PageHome.vue";

export default {
  name: "PageMain",
  components: {
    PageHome,
  },
};
</script>
