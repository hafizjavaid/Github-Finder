<template>
  <div class="home">
    <user-search />
    <user-results />
  </div>
</template>

<script>
import UserResults from "../components/UserResults.vue";
import UserSearch from "../components/UserSearch.vue";
export default {
  name: "Home",
  components: { UserSearch, UserResults },
};
</script>
