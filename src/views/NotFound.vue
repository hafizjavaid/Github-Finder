<template>
  <div class="hero">
    <div class="text-center hero-content">
      <div class="max-w-lg">
        <h1 class="text-8xl font-bold mb-8">Oops!</h1>
        <p class="text-5xl mb-8">404 - Page Not Found!</p>
        <router-link class="btn btn-primary btn-lg" to="/">
          <i class="fas fa-home"></i>
          Back To Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style></style>
