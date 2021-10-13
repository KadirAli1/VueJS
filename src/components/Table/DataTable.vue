<template>
  <v-container>
    <v-card>
      <h1 v-if="showTitle">{{ title }}</h1>

      <v-data-table :headers="headers" :items="items">
       
          <template v-if="showIcon" v-slot:[`item.actions`]="{ item }">
          <!-- <router-link to="`user/${item.id}`" > -->
            <v-icon small class="mr-2" @click="goToUser(item.id)">
              mdi-account
            </v-icon>
          <!-- </router-link> -->

          <!-- <router-link to="/userPosts"> -->
            <v-icon small @click="goToUserPosts(item.id)">
              mdi-post
            </v-icon>
          <!-- </router-link> -->
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
  methods:{
    goToUser(userId){
      this.$router.push(`user/${userId}`);
    },
    goToUserPosts(userId){
      this.$router.push(`posts?userId=${userId}`);
    }
  },
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
