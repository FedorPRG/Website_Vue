<template>
  <div class="articles__content">
    <div v-for="(article, index) in articles" :key="index" class="article">
      <img :src="article.img" alt="article1">
      <img class="article__tag" :src="article.tag" alt="Tag1">
      <div class="article__name">{{ article.name }}</div>
      <div class="article__wrapper">
        <div class="article__data">{{ article.data }}</div>
        <router-link to="/blogDetails">
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
          <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
          <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogArticlesCom',
  props: ['articles']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/vars";

.articles {
  margin-top: 150px;

  &__title {
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
  }

  &__content {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 381px);
    row-gap: 30px;
    column-gap: 28px;
  }
}

.article {
  padding: 21px;
  width: 382px;
  height: 521px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  position: relative;
  transition: all 0.3s;

  &__tag {
    position: absolute;
    top: 249px;
    left: 41px;
  }

  &__name {
    width: 290px;
    margin-top: 11px;
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
  }

  &__data {
    color: $textColor;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
  }

  &__wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    background-color: $indicatorsBackColor;
  }

  &:hover circle {
    cursor: pointer;
    transition: fill 0.3s;
    fill: #fff;
  }
}
</style>
