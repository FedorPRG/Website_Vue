<template>
  <div class="blogPages">
    <!-- <headerCom /> -->
    <section class="banner center">
      <div class="banner__titleBack">
        <h1 class="banner__title">Articles & News</h1>
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__ul">
            <li class="breadcrumbs__li"><a href="./index.html" class="breadcrumbs__link">Home</a></li>
            <li class="breadcrumbs__li"><a href="./blog.html" class="breadcrumbs__link">Blog</a></li>
          </ul>
        </nav>
      </div>
    </section>
    <blogLatestPostCom />
    <section class="articles center">
      <h1 class="articles__title">Articles & News</h1>
      <blogArticlesCom :articles="articles" />
      <div class="paganation">
        <div class="paganation__wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5" stroke="#f4f0ec" fill="#f4f0ec" />
          </svg>
          <p class="paganation__numberPage">01</p>
        </div>
        <div class="paganation__wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
          </svg>
          <p class="paganation__numberPage">02</p>
        </div>
        <div class="paganation__wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
          </svg>
          <p class="paganation__numberPage">03</p>
        </div>
        <div class="paganation__wrapper">
          <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </section>
    <footerCom />
  </div>
</template>

<script>
// import headerCom from '../components/headerCom.vue'
import footerCom from '../components/footerCom.vue'
import blogArticlesCom from '../components/blogArticlesCom.vue'
import blogLatestPostCom from '@/components/blogLatestPostCom.vue'

export default {
  name: 'blogComp',
  components: {
    // headerCom,
    footerCom,
    blogArticlesCom,
    blogLatestPostCom
  },
  data () {
    return {
      articles: [
        {
          img: require('../assets/blog-article1.png'),
          tag: require('../assets/tag1.png'),
          name: 'Let’s Get Solution For Building Construction Work',
          data: '26 December,2022'
        },
        {
          img: require('../assets/blog-article2.png'),
          tag: require('../assets/tag1.png'),
          name: 'Low Cost Latest Invented Interior Designing <br> Ideas.',
          data: '22 December,2022'
        },
        {
          img: require('../assets/blog-article3.png'),
          tag: require('../assets/tag1.png'),
          name: 'Best For Any Office & Business Interior Solution',
          data: '25 December,2022'
        },
        {
          img: require('../assets/blog-article4.png'),
          tag: require('../assets/tag1.png'),
          name: 'Let’s Get Solution For Building Construction Work',
          data: '26 December,2022'
        },
        {
          img: require('../assets/blog-article5.png'),
          tag: require('../assets/tag1.png'),
          name: 'Low Cost Latest Invented Interior Designing <br> Ideas.',
          data: '22 December,2022'
        },
        {
          img: require('../assets/blog-article6.png'),
          tag: require('../assets/tag1.png'),
          name: 'Best For Any Office & Business Interior Solution',
          data: '25 December,2022'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap");
@import "../assets/style/vars";
@import "../assets/style/breadcrumbs";

h1 {
  margin: 0;
}

p {
  margin: 0;
}

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}

.banner {
  margin-top: 45px;
  height: 356px;
  background: url(../assets/blog-banner.png) no-repeat center;
  padding-top: 178px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__titleBack {
    width: 503px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
    padding: 41px 78px 42px;
  }

  &__title {
    margin: 0;
    text-align: center;
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 81.25px */
  }

  &__text {
    width: 433px;
    padding-top: 18px;
    padding-left: 52px;
    color: $textColor;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
  }

  &__button {
    width: 124px;
    display: flex;
    gap: 10px;
    margin-top: 21px;
    margin-left: 52px;
    color: #fff;
    padding: 26px 48px;
    border-radius: 18px;
    background: #292f36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    align-items: center;
    font-family: "Jost", sans-serif;
    font-size: 18px;
    font-style: normal;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
  }
}

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

.paganation {
  margin-top: 51px;
  display: flex;
  gap: 20px;
  justify-content: center;

  &__wrapper {
    position: relative;

    &:hover circle {
      cursor: pointer;
      transition: all 0.3s;
      fill: $indicatorsBackColor;
      stroke: $indicatorsBackColor;
    }
  }

  &__numberPage {
    text-align: center;
    width: 18px;
    color: $titleColor;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    /* 24px */
    text-transform: capitalize;
    position: absolute;
    top: 14px;
    left: 17px;

    &:hover {
      cursor: pointer;
    }
  }
}

.footer {
  margin-top: 200px;
  margin-bottom: 116px;
}
</style>
