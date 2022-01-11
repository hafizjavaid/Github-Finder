<template>
  <div className="rounded-lg shadow-lg card bg-base-100">
    <div className="card-body">
      <h2 className="text-3xl my-4 font-bold card-title">
        Latest Respositories
      </h2>

      <repo-item v-for="(repo, i) in repos" :key="i" :repo="repo" />
    </div>
  </div>
</template>

<script>
import RepoItem from "./RepoItem.vue";
export default {
  components: { RepoItem },
  props: {
    repos: {
      type: Array,
    },
  },
  name: "RepoList",
};
</script>

<style></style>
