<template>
  <div
    v-if="alert !== null"
    class="flex items-start justify-center mb-4 space-x-2"
  >
    <div class="flex items-center w-full" v-if="alert.type == 'error'">
      <svg
        
        class="w-6 h-6 flex-none mt-0.5"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
        <path d="M8 8l8 8M16 8l-8 8" stroke="#B91C1C" strokeWidth="2"></path>
      </svg>
      <p class="flex-1 text-base ml-2 font-semibold leading-7 text-black">
        <strong>You're doing a great job</strong>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Alert",
  computed: {
    ...mapState(["alert"]),
  },
};
</script>

<style></style>
