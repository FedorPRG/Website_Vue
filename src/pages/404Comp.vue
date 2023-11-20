<template>
  <div>
    <section class="wrapper center">
      <div class="wrapperLeft">
        <h1 class="title">404</h1>
      <p class="text">We are sorry, but the page you requested was not found</p>
      <router-link to="/home">
      <a class="button" href="#">
        <div>Back To Home</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"
            stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
        </svg>
      </a></router-link>
    </div>
    <div class=""><img src="../assets/404.png" alt="404"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InternoVueCli404Comp'
}
</script>

<style lang="scss" scoped>
@import "../assets/style/vars";
.wrapper{
  margin-top: 57px;

  display: flex;
gap: 81px;
}
.wrapperLeft{
  width: 569px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}
.title{
  width: 569px;
  margin: 0;
  color: #CDA274;
font-family: "DM Serif Display", sans-serif;
font-size: 250px;
font-style: normal;
font-weight: 400;
line-height: 125%; /* 312.5px */
}
.text{
  margin: 0;
  color: #292F36;
font-family: "DM Serif Display", sans-serif;
font-size: 35px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 52.5px */
letter-spacing: 0.35px;
}
.button {
    width: 146px;
    display: flex;
    gap: 10px;
    margin-top: 21px;
    color: #fff !important;
    padding: 26px 48px;
    border-radius: 18px;
    background: $titleColor;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    align-items: center;
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-style: normal;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
    justify-content: center;
  }
</style>
