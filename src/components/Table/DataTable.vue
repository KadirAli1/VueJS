<template>
  <v-container>
    <v-card>
        <h1 v-if="showTitle">{{title}}</h1>
      
      <v-data-table  :headers="headers" :items="items" class="elevation-1">
      </v-data-table>
    </v-card>
  </v-container>
</template>


<script>


  // import axios from "axios";

  // Vue.prototype.$axios = axios

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
    
    }
  },
  // mounted() {
  //     this.tableItems = this.items
  //     this.tableHeaders = this.headers

  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => (this.posts = response.data))
      
  // }
};
</script>

<style>
</style>