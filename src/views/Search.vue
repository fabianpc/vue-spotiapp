<template>
<div class="row">
    <div class="col">
        <input v-model="termino" v-on:keyup="buscar()" type="text" class="form-control" placeholder="Buscar artista...">
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      termino: ""
    }
  },
  methods: {
    buscar: function() {
      console.log(this.termino)
    }
  }
}
</script>