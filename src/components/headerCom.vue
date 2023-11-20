<template>
  <header class="header center">
    <div class="logo">
      <router-link to="/home"><a href="index.html"><img src="../assets/logo.png" alt="Logo"></a></router-link>
      <router-link to="/home"><a href="index.html">Interno</a></router-link>
    </div>
    <nav class="header__right">
      <router-link to="/home">Home</router-link>
      <router-link to="/project">Project</router-link>
      <router-link to="/blog">Blog</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerCom'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/vars";

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "DM Serif Display", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;

  /* 50px */
  & img {
    width: 34px;
  }
}

.header {
  padding-top: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__right {
    display: flex;
    justify-content: space-between;
    width: 243px;
    font-family: "Jost", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 25px */
  }
}
</style>
