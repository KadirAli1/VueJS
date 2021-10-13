<template>
  <div>
    <ul>
        <li v-for="user in users" :key="user.id">{{user.id}}</li>
    </ul>
  </div>
</template>

<script>

import axios from "../services/axios";
export default {
  data: () => ({
    users: [],
    // id: this.$route.params.id
  }),

  methods: {
        // getUser(userId){
        //     axios.getUser((response) => {this.$route.user.userId = response.data})
        // }

  },
  mounted() {
     if(this.user){
         axios.getUser().then((response) => {
     
             console.log(response.data)
         })
     }

  }
}
</script>

<style></style>
