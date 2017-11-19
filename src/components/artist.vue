<template lang="pug">
  div
    h3: a(:href="artist.url" target="_blank") {{artist.name}}
    img(:src="artist.image[2]['#text']")
    h4 {{artist.listeners}} reproducciones
</template>
<script>
    export default {
        name: 'artist',
        props: ['artist']
    }
</script>
<style lang="stylus" scoped>
div 
    background-color #354a5e
    display inline-block
    margin 0 20px 20px 0
    width 20%
    border-radius 2px
img
    width 100%
a
    text-decoration none
h4
    color #fff
</style>