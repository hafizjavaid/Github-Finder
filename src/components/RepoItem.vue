<template>
  <div class="mb-2 rounded-md card bg-gray-100 hover:bg-gray-300">
    <div class="card-body">
      <h3 class="mb-2 text-xl font-semibold">
        <a :href="repo.html_url">
          <i class="fas fa-link inline mr-1"></i> {{ repo.name }}
        </a>
      </h3>
      <p class="mb-3">{{ repo.description }}</p>
      <div>
        <div class="mr-2 badge badge-info badge-lg">
          <i class="fas fa-eye mr-2"></i> {{ repo.watchers_count }}
        </div>
        <div class="mr-2 badge badge-success badge-lg">
          <i class="fas fa-star mr-2"></i> {{ repo.stargazers_count }}
        </div>
        <div class="mr-2 badge badge-error badge-lg">
          <i class="fas fa-info mr-2"></i> {{ repo.open_issues }}
        </div>
        <div class="mr-2 badge badge-warning badge-lg">
          <i class="fas fa-utensils mr-2"></i> {{ repo.forks }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RepoItem",
  props: ["repo"],
};
</script>

<style></style>
