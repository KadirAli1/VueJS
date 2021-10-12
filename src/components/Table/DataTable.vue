<template>
  <v-container>
    <v-card>
      <h1 v-if="showTitle">{{ title }}</h1>

      <v-data-table
        :headers="headers"
        :items="items"
        sort-by="calories"
        class="elevation-1"
      >
        <v-list-item-action>
          <v-btn @click.stop="$store.commit('deleteTask', task.id)" icon>
            <v-icon color="primary lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
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
    },
  },
};
</script>

<style></style>
