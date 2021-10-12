<template>
  <v-data-table
    :items="posts"
    :headers="tableHeaders"
    v-bind:showTitle="true"
    :title="postTitle"
  >
    <!-- <v-icon color="primary lighten-1">mdi-delete</v-icon> -->
  </v-data-table>
</template>

<script>
import axios from "../services/axios";

export default {
  data: () => ({
    posts: [],
    dialog: false,
    dialogDelete: false,
    tableHeaders: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "user Id", value: "userId" },
      { text: "Id", value: "id" },
      { text: "Title ", value: "title" },
      { text: "Body", value: "body" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    postTitle: "POSTS",
  }),
  components: {
    "data-table": require("@/components/Table/DataTable.vue").default,
  },

  mounted: function() {
    axios.getPosts().then((response) => (this.posts = response.data));
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
  },
};
</script>

<style></style>
