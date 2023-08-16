<template>
  <div class="Main">
    <PageSearch />
  </div>
</template>

<script>
// @ is an alias to /src
import PageSearch from "@/views/PageSearch.vue";

export default {
  name: "PageMain",
  components: {
    PageSearch,
  },
};
</script>
