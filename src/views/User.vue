<template>
  <div>
    <ul>
      <li v-for="us in user">{{ user.id }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "../services/axios";
export default {
  data: () => ({
    user: [],
  }),

  methods: {},
  mounted() {
    // axios.gettUser().then((response) => (this.user = response.data));
    axios.gettUser().then((response) => console.log(response.data));
  },
};
</script>

<style></style>
