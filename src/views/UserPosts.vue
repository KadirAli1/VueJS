<template>
  <div>
    <h1>USer POST</h1>
    <ul>
      <!-- <li>{{ users }}</li> -->
      <!-- <router-link
        :to="{
          name: 'UserPosts',
          params: { id: users.userId },
          query: { posts: true },
        }"
      >
        Navigate to page 2</router-link
      > -->
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    posts: [],
    // users: [],
  }),

  methods: {
    getUserPosts() {
      axios.getUserPosts(this.$route.params.userId).then((response) => {
        // this.users = this.users.filter((users) => users.userId == id);
        // this.$router.push(`posts?userId=${userId}`);
        // this.$route.push(`posts?userId=${userId}`) = response.data;
        this.$router.push(`posts?userId=${userId}`) == response.data;
      });

      // if(users) {
      //   axios
      //     .getUserPosts(this.$route.params.userId)
      //     .then((response) => (this.users = response.data));
      // },

      // computed: {
      //   queryParams() {
      //     return this.$route.query;
      //   },

      // getUser(userId) {
      //   axios
      //     .getUser(this.$route.params.userId)
      //     .then(
      //       (response) =>
      //         this.$router.push(`posts?userId=${userId}`) == response.data
      //     );
      // console.log(response.data));
    },
  },

  mounted() {
    const path = this.$route.params.userId;
    // if (this.$$route.query.posts) {
    //   this.posts = this.$.route.query.posts;

    // }
    // const url = this.$route.query.userId;
    // console.log(url);
    console.log(path);
    // this.getUser();
    //console.log("User Post im am here", path);
    // console.log(this.getUserPosts());
    // console.log(this.getUserPosts());
    // this.getUserPosts(userId);
    this.getUserPosts();
  },
};
</script>

<style></style>
