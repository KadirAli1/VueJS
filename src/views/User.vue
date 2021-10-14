<template>
  <!-- <div>
    <ul>
      <li v-for="user in users" :key="user">{{ user.userId }}</li>
      <li>{{ user.userId }}</li>
    </ul>
  </div> -->
  <data-table
    :items="users"
    :headers="tableHeaders"
    :showTitle="false"
    :showIcon="true"
  >
  </data-table>
</template>

<script>
import axios from "../services/axios";
export default {
  data: () => ({
    users: [],
    url: null,
    name: "",
    userId: "",

    tableHeaders: [
      { text: "Id", value: "id" },
      { text: " Name", value: "name" },
      { text: "User Name", value: "username" },
      { text: "email ", value: "email" },
      { text: "Address  ", value: "address.street" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
  components: {
    "data-table": require("@/components/Table/DataTable.vue").default,
  },

  methods: {
    getUser(userId) {
      axios
        .getUser(userId)
        .then((response) => (this.users.url = response.data));
      console.log(response.data);
    },
  },
  mounted() {
    const url = this.$route.params.userId;
    console.log(url);

    // console.log(this.getUser());
    // if (this.user) {
    //   axios.getUser().then((response) => {
    //     console.log(response.data);
    //   });
    // }
  },
};
</script>

<style></style>
