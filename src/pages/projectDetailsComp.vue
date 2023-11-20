<template>
  <div class="blogPages">
    <!-- <headerCom /> -->
    <section class="banner ">
    </section>
    <section class="content centerProjectDetails">
      <h1 class="title">{{ title }}</h1>
      <div class="text">{{ text }}</div>
    </section>
    <div class="wrapper">
      <img :src= "getSlider" alt="">
      <button @click="nextSlider()" class="pagination"><img src="../assets/pngwing.png" alt=""></button>
    </div>
    <footerCom />
  </div>
</template>

<script>

// import headerCom from '../components/headerCom.vue'
import footerCom from '../components/footerCom.vue'

export default {
  name: 'projectDetailsComp',
  components: {
    // headerCom,
    footerCom
  },
  methods: {
    nextSlider () {
      console.log(12)
      this.$emit('nextSlider')
    }
  },
  computed: {
    title () { return this.$store.state.title },
    text () { return this.$store.state.text },
    getSlider () { return this.$store.getters.getSlider }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap");
@import "../assets/style/vars";

h1 {
  margin: 0;
}

p {
  margin: 0;
}

.centerProjectDetails {
  padding-left: calc(50% - 658px / 2);
  padding-right: calc(50% - 658px / 2);
}

.title {
  color: $titleColor;
  font-family: "DM Serif Display", sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
  margin-bottom: 11px;

}

.text {
  color: $textColor;
  font-family: "Jost", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}

.banner {
  margin-top: 45px;
  height: 351px;
  background: url(../assets/projectDetails-banner.png) no-repeat center;

}

.content {
  margin-top: 200px;
}

.wrapper {
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  background-color: white;
  border: 0;
  cursor: pointer;
}

.hidden {
  display: none;
}
</style>
