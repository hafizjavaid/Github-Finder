<template>
  <div class="w-full mx-auto lg:w-10/12">
    <div class="mb-4">
      <router-link to="/" class="btn btn-ghost"> Back To Search </router-link>
    </div>

    <div
      class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8"
    >
      <div class="custom-card-image mb-6 md:mb-0">
        <div class="rounded-lg shadow-xl card image-full">
          <figure>
            <img :src="user.avatar_url" alt="" />
          </figure>
          <div class="card-body justify-end">
            <h2 class="card-title mb-0">{{ user.name }}</h2>
            <p>{{ user.login }}</p>
          </div>
        </div>
      </div>

      <div class="col-span-2">
        <div class="mb-6">
          <h1 class="text-3xl card-title">
            {{ user.name }}
            <div class="ml-2 mr-1 badge badge-success">{{ user.type }}</div>
            <div v-if="user.hireable" class="mx-1 badge badge-info">
              Hireable
            </div>
          </h1>
          <p>{{ user.bio }}</p>
          <div class="mt-4 card-actions">
            <a :href="user.html_url" target="_blank" class="btn btn-outline">
              Visit Github Profile
            </a>
          </div>
        </div>

        <div class="w-full rounded-lg shadow-md bg-base-100 stats">
          <div class="stat" v-if="user.location">
            <div class="stat-title text-md">Location</div>
            <div class="text-lg stat-value">{{ user.location }}</div>
          </div>

          <div class="stat" v-if="user.blog">
            <div class="stat-title text-md">Website</div>
            <div class="text-lg stat-value">
              <a
                :href="`https://${user.blog}`"
                target="_blank"
                rel="noreferrer"
              >
                {{ user.blog }}
              </a>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title text-md">Twitter</div>
            <div class="text-lg stat-value">
              <a
                :href="`https://twitter.com/${user.twitter_username}`"
                target="_blank"
                rel="noreferrer"
              >
                {{ user.twitter_username }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
      <div class="stat">
        <div class="stat-figure text-secondary">
          <i class="fas fa-users text-3xl md:text-5xl" />
        </div>
        <div class="stat-title pr-5">Followers</div>
        <div class="stat-value pr-5 text-3xl md:text-4xl">
          {{ user.followers }}
        </div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <i class="fas fa-user-friends text-3xl md:text-5xl" />
        </div>
        <div class="stat-title pr-5">Following</div>
        <div class="stat-value pr-5 text-3xl md:text-4xl">
          {{ user.following }}
        </div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <i class="fab fa-codepen text-3xl md:text-5xl" />
        </div>
        <div class="stat-title pr-5">Public Repos</div>
        <div class="stat-value pr-5 text-3xl md:text-4xl">
          {{ user.public_repos }}
        </div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <i class="fas fa-store text-3xl md:text-5xl" />
        </div>
        <div class="stat-title pr-5">Public Gists</div>
        <div class="stat-value pr-5 text-3xl md:text-4xl">
          {{ user.public_gists }}
        </div>
      </div>
    </div>

    <repo-list :repos="repos" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import RepoList from "../components/RepoList.vue";
export default {
  components: { RepoList },
  name: "User",
  methods: {
    ...mapActions(["getUserAndRepos"]),
  },
  mounted() {
    this.getUserAndRepos(this.$route.params.id);
  },
  computed: {
    ...mapState({
      user: "user",
      repos: "repos",
    }),
  },
};
</script>

<style></style>
