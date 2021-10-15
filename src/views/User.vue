<template>
  <div>
    <h3>
      {{ "User Id is:" + $route.params.userId }}
    </h3>

    <ul>
      <!-- <li>
        {{ users }} -->
      <!-- </li> -->
      <li>{{ users.name }}</li>
      <li>{{ users.username }}</li>
      <li>{{ users.address ? users.address.city : null }}</li>
      <li>{{ users.phone }}</li>
      <li>{{ users.company ? users.company.name : null }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "../services/axios";
export default {
  data: () => ({
    users: [],
  }),

  methods: {
    getUser() {
      axios
        .getUser(this.$route.params.userId)
        .then((response) => (this.users = response.data));
      //  .then((response) => console.log(response.data));
    },
  },
  mounted() {
    const url = this.$route.params.userId;
    console.log(url);

    this.getUser();
  },
};
</script>

<style></style>
