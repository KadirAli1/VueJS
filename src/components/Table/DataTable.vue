<template>
  <v-container>
    <v-card>
      <h1 v-if="showTitle">{{ title }}</h1>

      <v-data-table :headers="headers" :items="items">
        <template v-if="showIcon" v-slot:[`item.actions`]="{ item }">
          <router-link to="/user">
            <v-icon small class="mr-2">
              mdi-account
            </v-icon>
          </router-link>

          <router-link to="/userPosts">
            <v-icon small>
              mdi-post
            </v-icon>
          </router-link>
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
    showIcon: {
      type: Boolean,
    },
  },
};
</script>

<style>
.mr-2 {
  text-decoration: none;
}
</style>
