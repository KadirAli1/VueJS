<template>
  <data-table
    :items="posts"
    :headers="tableHeaders"
    :showTitle="true"
    :title="postTitle"
    :showIcon="false"
  />
</template>

<script>
import axios from "../services/axios";

export default {
  data: () => ({
    posts: [],

    tableHeaders: [
      { text: "user Id", value: "userId" },
      { text: "Id", value: "id" },
      { text: "Title ", value: "title" },
      { text: "Body", value: "body" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    postTitle: "POSTS",

    icons: [],
  }),
  components: {
    "data-table": require("@/components/Table/DataTable.vue").default,
  },

  mounted() {
    axios.getPosts().then((response) => (this.posts = response.data));
    // console.log("KAdir")
  },

  methods: {},
};
</script>

<style></style>
