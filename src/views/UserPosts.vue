<template>
  <div>
    <h1>User Post</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    posts: [],
  }),

  methods: {
    // getUserPosts() {
    //   axios.getUserPosts(this.$route.params.userId).then(() => {
    //     this.users = this.users.filter((users) => users.userId == id);
    //   });
    // },
  },
  computed: {
    // queryParams() {
    //   return this.$route.query;
    // },
  },

  mounted() {
    const path = this.$route.params.userId;
    // const url = this.$route.query.userId;
    // console.log(url);
    console.log(path);

    console.log("User Post im am here", path);
    // console.log(this.getUserPosts());
  },
};
</script>

<style></style>
