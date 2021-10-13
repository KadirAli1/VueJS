<template>
  <div>
    <ul>
        <!-- <li v-for="user in users" :key="user.id">{{user.id}}</li> -->
    </ul>
  </div>
</template>

<script>

import axios from "../services/axios";
export default {
  data: () => ({
    users: [],
    // id: this.$route.params.id
    // url: null
  }),

  methods: {
        getUser(userId){
            axios.getUser((response) => {this.$route.params.userId = response.data})
        }

  },
  mounted() {
    //  if(this.user){
    //      axios.getUser().then((response) => {
     
    //          console.log(response.data)
    //      })
    //  }

    const url = this.$route.params.userId

    console.log("KAdir")


  }
}
</script>

<style></style>
