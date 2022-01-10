<template>
  <nav class="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
    <div class="container mx-auto">
      <div class="flex items-center px-2 mx-2">
        <i class="fab fa-github inline pr-2 text-3xl"></i>
        <router-link to="/" class="text-lg font-bold align-middle">
          Github Finder
        </router-link>
      </div>
      <div class="flex-1 px-2 mx-2">
        <div class="flex justify-end">
          <router-link to="/" class="btn btn-ghost btn-sm rounded-btn">
            Home
          </router-link>
          <router-link to="/about" class="btn btn-ghost btn-sm rounded-btn">
            About
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
