<template lang="pug">
  #app
    h1 VueMusic
    h2 Seleccione el pais que desea visualizar
    spinner(v-show="loading")
    select(@change="loadCountry" v-model="selectedCountry" v-show="!loading")
      option(v-for="country in countries" :value="country.name") {{country.name}}
    ul(v-show="!loading")
      artist(v-for="artist in artists" :artist="artist" :key="artist.mbid")
</template>

<script>
import { getContries, getArtists } from './api';
import artist from './components/artist';
import spinner from './components/spinner'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      selectedCountry: '',
      countries: [],
      loading: true,
    }
  },
  mounted: function () {
    this.loading = true;
    const self = this;
    getContries()
      .then(function(countries){
        self.countries = countries;
        self.loading = false;
      });
  },
  methods: {
    loadCountry: function(){
      this.loading = true;
      const self = this;
      getArtists(self.selectedCountry)
      .then(function(artists){
        self.artists = artists;
        self.loading = false;
      });
    }
  },
  components: {
    'artist': artist,
    'spinner': spinner
  }
}
</script>

<style lang="stylus">
#app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px

h1, h2
    font-weight normal

ul
    list-style-type none
    padding 0

li
    display inline-block
    margin 0 10px

a
    color #42b983
select
    background-color rgb(54, 75, 94)
    color rgb(67, 185, 131)
    height 30px
    width auto
    font-family Avenir, Helvetica, Arial, sans-serif
    border none
    font-size 17px
</style>
