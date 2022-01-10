<template>
  <div class="flex flex-col justify-between h-screen">
    <Navbar />
    <main class="container mx-auto px-3 pb-12">
      <Alert />
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Alert from "./components/layout/Alert.vue";
import Footer from "./components/layout/Footer.vue";
import Navbar from "./components/shared/Navbar.vue";
export default {
  components: {
    Navbar,
    Alert,
    Footer,
  },
  name: "App",
};
</script>

<style></style>
