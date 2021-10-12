<template>
  <data-table
    :items="users"
    :headers="tableHeaders"
    :showTitle="false"
    :title="tableTitle"
   
  >
   
  </data-table>
</template>

<script>
import axios from "../services/axios";
export default {
  data: () => ({
    users: [],


    tableHeaders: [
    
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
      axios.getUsers()
      .then((response) => (this.users = response.data))
      .catch(error => console.log(error));
    },
  },
  components: {
    "data-table": require("@/components/Table/DataTable.vue").default,
  },
  mounted: function() {

    this.getAllData();

    // axios.getFirstUSer().then((response) => {
    //   console.log(response.data);
    // });
  },
};
</script>

<style></style>
