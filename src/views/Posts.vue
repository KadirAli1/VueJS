<template>
<data-table :items="posts" :headers="tableHeaders" v-bind:showTitle="true" :title="postTitle"  />


</template>

<script>
import axios from '../services/axios'

  export default {
     data: () =>({
       posts: [],

        tableHeaders: [
            {
                  
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'user Id', value: 'userId' },
        { text: 'Id', value: 'id' },
        { text: 'Title ', value: 'title' },
        { text: 'Body', value: 'body' },
        { text: 'Actions', value: 'actions', sortable: false },
            
        ],
        
        postTitle: "POSTS"
        
     }),
      components: {
     'data-table': require('@/components/Table/DataTable.vue').default,
  
     },
     
     mounted: function() {
       axios.getPosts().then((response) => (this.posts = response.data))
     }
    
  }
</script>

    


<style>

</style>