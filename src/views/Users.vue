<template>
  <data-table
    :items="users"
    :headers="tableHeaders"
    v-bind:showTitle="false"
    :title="tableTitle"
    sort-by="calories"
    class="elevation-1"
  >
  </data-table>
</template>

<script>
import axios from "../services/axios";
export default {
  data: () => ({
    users: [],
    drawer: null,

    tableHeaders: [
      {
        // text: 'Dessert (100g serving)',
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Id", value: "id" },
      { text: " Name", value: "name" },
      { text: "User Name", value: "username" },
      { text: "email ", value: "email" },
      { text: "Address  ", value: "address.street" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    tableTitle: "USERS",
  }),

  methods: {
    getAllData() {
      axios.getUsers().then((response) => (this.users = response.data));
    },
  },
  components: {
    "data-table": require("@/components/Table/DataTable.vue").default,
  },
  mounted: function() {
    // axios.getUsers().then((response) => (this.users = response.data));
    this.getAllData();
    // axios.getFirstUSer().then((response) => {
    //   console.log(response.data);
    // });
  },
};
</script>

<style></style>
