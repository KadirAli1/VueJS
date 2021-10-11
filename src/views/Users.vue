<template>

<data-table  :items="tableItems" :headers="tableHeaders" v-bind:showTitle="false" :title="tableTitle"  />


</template>

<script>
export default {   
      data: function () {
            return {
                
        tableItems: [
          {
            id: 1,
            firstName: "Yohn",
            lastName: "Doe",
            address: "Nikola Vapcarov",
            phoneNumber: "073 233 111",
          },
          {
            id: 2,
            firstName: "Darko",
            lastName: "Murdjevski",
            address: "Franc Rozman",
            phoneNumber: "077 123 321",
          },
          {
            id: 3,
            firstName: "Martina",
            lastName: "Petrovikj",
            address: "Nikola Karev",
            phoneNumber: "076 321 123",
          },
          {
            id: 4,
            firstName: "Eren",
            lastName: "Ali",
            address: "Nikola Vapcarov 16",
            phoneNumber: "073 233 111",
          },
          {
            id: 5,
            firstName: "Ilir",
            lastName: "Limani",
            address: "Bajram Shabani",
            phoneNumber: "070 786 678",
          },
          {
            id: 6,
            firstName: "Smith",
            lastName: "Johny",
            address: "Nikola Vapcarov",
            phoneNumber: "073 233 111",
          },
          {
            id: 7,
            firstName: "Damijan",
            lastName: "Stojanovski",
            address: "Franc Rozman",
            phoneNumber: "077 123 321",
          },
          {
            id: 8,
            firstName: "Dare",
            lastName: "Darudov",
            address: "Nikola Karev",
            phoneNumber: "076 321 123",
          },
          {
            id: 9,
            firstName: "Ivan",
            lastName: "Kitanovski",
            address: "Shirok Sokak 16",
            phoneNumber: "072 243 511",
          },
          {
            id: 10,
            firstName: "Johny",
            lastName: "Deep",
            address: "Wall Street",
            phoneNumber: "070 126 678",
          },
          
        ],
        tableHeaders: [
            {
                  
          // text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Id', value: 'id' },
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' },
        { text: 'Address ', value: 'address' },
        { text: 'Phone Number ', value: 'phoneNumber' },
        // { text: 'Actions', value: 'actions', sortable: false },
            
        ],

        
        tableTitle: "USERS",
       
      }
     },
    
    
    components: {
     'data-table': require('@/components/Table/DataTable.vue').default
     }

}
</script>


<style>

</style>