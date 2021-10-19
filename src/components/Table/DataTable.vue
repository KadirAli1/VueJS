<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-if="showButtonPost" v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            class="add-posts  mb-6"
            left
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
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    label="Title "
                    required
                    v-model="title"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-textarea
                    label="Body"
                    hint="example of helper text only on focus"
                    v-model="body"
                  ></v-textarea>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
                    label="Name:"
                    v-model="name"
                    
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="registerPost">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-card>
      <h1 v-if="showTitle">{{ titleHeader }}</h1>

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
import axios from "../../services/axios";
export default {
  data: () => ({
    dialog: false,
      body: "",
      name: "",
     title: "",
  }),

  methods: {
    goToUser(userId) {
      this.$router.push(`user/${userId}`);
    },
    goToUserPosts(userId) {
      this.$router.push(`posts?userId=${userId}`);
    },

    registerPost() {

      fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          body: this.body,
          userId: this.name,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => this.items.push(json))
        // console.log(json)
    }
  },
  mounted() {
   
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
    titleHeader: {
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
    showButtonPost: {
      type: Boolean,
    },
  },
};
</script>

<style>
.add-posts {
  margin: 10px;
  margin-bottom: 10px;
}
</style>
