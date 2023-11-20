<template>
  <div class="index center">
    <!-- <headerCom /> -->
    <section class="banner center">
      <h1 class="banner__title">Let Your Home <br> Be Unique</h1>
      <p class="banner__text">There are many variations of the passages of lorem Ipsum fromavailable,
        majority.</p>
      <a class="banner__button" href="#">
        <div>
          Get Started</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
          <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274"
            stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
        </svg>
      </a>
    </section>
    <section class="projects center">
      <h1 class="projects__title">
        Follow Our Projects
      </h1>
      <p class="projects__text">It is a long established fact that a reader will be distracted by the of readable <br>
        content of page lookings at
        its layouts points.</p>
      <indexProjectsCom :projects="projects" />
    </section>
    <indexIndicatorsCom :indicators="indicators" />
    <indexArticlesCom :articles="articles" />
    <footerCom :indicators="indicators" />
  </div>
</template>

<script>
// import headerCom from '../components/headerCom.vue'
import footerCom from '../components/footerCom.vue'
import indexProjectsCom from '@/components/indexProjectsCom.vue'
import indexIndicatorsCom from '@/components/indexIndicatorsCom.vue'
import indexArticlesCom from '@/components/indexArticlesCom.vue'

export default {
  name: 'indexComp',
  data () {
    return {
      projects: [{
        img: require('../assets/index-item1.png'),
        name: 'Minimal Bedroom',
        discription: 'Decor / Artchitecture'
      }, {
        img: require('../assets/index-item2.png'),
        name: 'Minimal Bedroom',
        discription: 'Decor / Artchitecture'
      }, {
        img: require('../assets/index-item3.png'),
        name: 'Minimal Bedroom',
        discription: 'Decor / Artchitecture'
      }, {
        img: require('../assets/index-item4.png'),
        name: 'Minimal Bedroom',
        discription: 'Decor / Artchitecture'
      }],
      indicators: [{
        quantity: '12',
        name: 'Years Of Experiance'
      }, {
        quantity: '85',
        name: 'Success Project'
      }, {
        quantity: '15',
        name: 'Active Project'
      }, {
        quantity: '95',
        name: 'Happy CUstomers'
      }],
      articles: [{
        img: require('../assets/index-article1.png'),
        imgTag: require('../assets/tag1.png'),
        name: 'Let’s Get Solution For Building Construction Work',
        data: '26 December,2022'
      }, {
        img: require('../assets/index-article2.png'),
        imgTag: require('../assets/tag2.png'),
        name: 'Low Cost Latest Invented Interior Designing Ideas.',
        data: '22 December,2022'
      }, {
        img: require('../assets/index-article3.png'),
        imgTag: require('../assets/tag3.png'),
        name: 'Best For Any Office & Business Interior Solution',
        data: '25 December,2022'
      }]
    }
  },
  components: {
    // headerCom,
    footerCom,
    indexProjectsCom,
    indexIndicatorsCom,
    indexArticlesCom
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost:wght@400;600&display=swap");
@import "../assets/style/vars";

img {
  display: block;
}

a {
  text-decoration: none;
  color: $titleColor;
}

svg:hover {
  cursor: pointer;
}

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}

.banner {
  margin-top: 57px;
  height: 758px;
  background: url(../assets/index-banner.png) no-repeat center;

  &__title {
    padding-top: 208px;
    padding-left: 52px;
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 65px;
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
  }
}

.projects {
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
    margin-top: 8px;
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
}
</style>
