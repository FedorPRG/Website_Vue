<template>
  <section class="articles center">
    <h1 class="articles__title">Articles & News</h1>
    <p class="articles__text">It is a long established fact that a reader will be distracted by the of readable
      content <br> of a page when
      lookings at its layouts the points of using.</p>
    <div class="articles__content">
      <div v-for="(article, index) in articles" :key="index" class="article">
        <img :src="article.img" alt="article1">
        <img class="article__tag" :src="article.imgTag" alt="Tag1">
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
  </section>
</template>

<script>
export default {
  name: 'indexArticlesCom',
  props: ['articles']
}
</script>

<style lang="scss" scoped>
@import "../assets/style/vars";

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}

.articles {
  margin-top: 96px;

  &__title {
    color: $titleColor;
    text-align: center;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
  }

  &__text {
    margin-top: 12px;
    color: $textColor;
    text-align: center;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
  }

  &__content {
    margin-top: 52px;
    display: flex;
    justify-content: space-between;
  }
}

.article {
  padding: 21px;
  width: 382px;
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
    margin-top: 21px;
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
    margin-top: 30px;
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
