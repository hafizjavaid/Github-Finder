<template>
  <div class="grid grid-cols-1 xl:grid-cols-2 mb-8 gap-8">
    <div>
      <form @submit.prevent="handleSubmit">
        <div class="form-control">
          <div class="relative">
            <input
              type="text"
              class="w-full pr-40 bg-gray-200 input input-lg text-black"
              placeholder="Search"
              v-model="text"
            />
            <button
              type="submit"
              class="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
            >
              Go
            </button>
          </div>
        </div>
      </form>
    </div>

    <div>
      <button @click="clearUsers" class="btn btn-ghost btn-lg">Clear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSearch",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleSubmit() {
      if (this.text == "") {
        this.$store.dispatch("setAlert", {
          msg: "Please enter something",
          type: "error",
        });
      } else {
        this.$store.dispatch("searchUsers", this.text);
      }
    },
    clearUsers() {
      this.$store.commit("SET_USERS", []);
    },
  },
 
};
</script>

<style></style>
