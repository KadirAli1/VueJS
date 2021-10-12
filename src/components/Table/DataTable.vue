<template>
  <v-container>
    <v-card>
      <h1 v-if="showTitle">{{ title }}</h1>

      <v-data-table :headers="headers" :items="items">
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    //   tableHeaders: [],
    //   tableItems: [],
  }),

  props: {
    items: {
      type: Array,
      required: true,
      default: [],
    },
    headers: {
      type: Array,
      required: true,
      default: [],
    },
    title: {
      type: String,
      required: false,
      default: "",
    },
    showTitle: {
      type: Boolean,
      // required: false,
      // default: ""
    },
  },
  // mounted() {
  //     this.tableItems = this.items
  //     this.tableHeaders = this.headers

  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => (this.posts = response.data))

  // }
};
</script>

<style></style>
