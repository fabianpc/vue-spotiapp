<template>
<h1>Home load</h1>
<h2 v-for="item in items" :key="item.id">{{item.name}}</h2>
</template>

<script>
import SpotifyService from '../services/SpotifyService.js'
export default {
  data() {
    return {
      items: null
    }
  },    
  created() {
      SpotifyService.getNewReleases()
        .then((response) => {
            this.items = response.data['albums'].items
        })
        .catch(error => {
            console.log(error)
        })
  }
}

</script>