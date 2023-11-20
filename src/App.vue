<template>
  <div id="app">
    <headerCom />
    <router-view/>
  </div>
</template>

<script>
import headerCom from './components/headerCom.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    headerCom
  },
  methods: {
    nextSlider () {
      this.NEXT_SLIDER()
    },
    ...mapMutations(['NEXT_SLIDER'])
  },
  computed: {
    ...mapState(['title', 'text', 'currentSlider', 'slider']),
    ...mapGetters(['getSlider'])
  }
}
</script>

<style lang="scss">
@import "./assets/style/vars";

// * {
//   box-sizing: border-box;
// }

#app {
  // img {
  //   display: block;
  // }

  a {
    text-decoration: none;
    color: $titleColor;
  }

  // svg:hover {
  //   cursor: pointer;
  // }

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
</style>
