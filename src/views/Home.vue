<template>
<div class="card-columns">
  <div v-for="cancion in nuevasCanciones" :key="cancion.id" class="card">
    <img v-bind:src="cancion.images[0].url" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{cancion.name}}</h5>
      <p class="card-text"><span v-for="artista in cancion.artists" :key="artista.id" class="badge badge-pill badge-primary">{{ artista.name }}</span></p>
    </div>
  </div>
</div>
</template>

<script>
import SpotifyService from '../services/SpotifyService.js'
export default {
  data() {
    return {
      nuevasCanciones: null
    }
  },    
  created() {
      SpotifyService.getNewReleases()
        .then((response) => {
            console.log(response.data);
            this.nuevasCanciones = response.data['albums'].items
        })
        .catch(error => {
            console.log(error)
        })
  }
}

</script>