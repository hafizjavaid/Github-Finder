<template>
  <div
    v-if="!loading"
    class="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
  >
    <user-item v-for="(user, i) in users" :key="i" :user="user" />
  </div>
  <h1 v-else>Loading ....</h1>
</template>

<script>
import { mapState } from "vuex";
import UserItem from "./UserItem.vue";
export default {
  components: { UserItem },
  name: "UserResults",

  computed: {
    ...mapState(["loading", "users"]),
  },
};
</script>

<style></style>
