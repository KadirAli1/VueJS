<template>
  <v-container>
       <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="add-posts"
        >
          Add post
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">New Post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Title "
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Body"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
            
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="User Id"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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
   dialog: false,
  }),
  methods: {
    goToUser(userId) {
      this.$router.push(`user/${userId}`);
    },
    goToUserPosts(userId) {
      this.$router.push(`posts?userId=${userId}`);
      // this.$router.push(`userPosts/${userId}`);
    },
  },
  mounted() {
    // console.log("Components")
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
.add-posts{
  margin: 10px;
  margin-bottom: 10px;
}
</style>
