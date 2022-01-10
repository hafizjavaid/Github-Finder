<template>
  <div class="card shadow-md compact side bg-base-100">
    <div class="flex-row items-center space-x-4 card-body">
      <div>
        <div class="avatar">
          <div class="rounded-full shadow w-14 h-14">
            <img :src="user.avatar_url" alt="Profile" />
          </div>
        </div>
      </div>
      <div>
        <h2 class="card-title">{{ user.login }}</h2>
        <router-link
          class="text-base-content text-opacity-40"
          :to="`/user/${user.login}`"
        >
          Visit Profile
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
  name: "UserItem",
};
</script>

<style></style>
