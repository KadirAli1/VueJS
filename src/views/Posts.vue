<template>
  <data-table
    :items="posts"
    :headers="tableHeaders"
    :showTitle="true"
    :title="postTitle"
    :showIcon="false"
  />

  <!-- <div>
    <li>{{ users.name }}</li>
    <li>{{ posts }}</li>
  </div> -->
</template>

<script>
import axios from "../services/axios";

export default {
  data: () => ({
    posts: [],
    users: [],

    tableHeaders: [
      { text: "user Id", value: "userId" },
      { text: "Id", value: "id" },
      { text: "Title ", value: "title" },
      { text: "Body", value: "body" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    postTitle: "POSTS ",

    icons: [],
  }),
  components: {
    "data-table": require("@/components/Table/DataTable.vue").default,
  },

  mounted() {
    const userId = this.$route.query.userId;
    console.log(userId);

    axios.getUser(userId).then((response) => {
      this.postTitle = response.data.name;
      console.log(response.data);
    });

    if (userId) {
      axios.getUserPost(userId).then((response) => {
        this.posts = response.data;
        console.log(response.data);
      });
    } else {
      axios.getPosts().then((response) => (this.posts = response.data));
    }
  },

  methods: {},
};
</script>

<style></style>
