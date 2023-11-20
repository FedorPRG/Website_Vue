<template>
  <div class="blogPages">
    <!-- <headerCom /> -->
    <section class="banner center">
      <div class="banner__titleBack">
        <h1 class="banner__title">Our Project</h1>
        <nav class="breadcrumbs">
          <ul class="breadcrumbs__ul">
            <li class="breadcrumbs__li"><a href="./index.html" class="breadcrumbs__link">Home</a></li>
            <li class="breadcrumbs__li"><a href="./blog.html" class="breadcrumbs__link">Project</a></li>
          </ul>
        </nav>
      </div>
    </section>
    <section class="content center">
      <div class="wrapper">
        <button @click='selectProject(project, $event)' class="btn" v-for="(project, index) in projectsList"
          :key="index">{{ project }}</button>
      </div>
      <projectsListCom :projects="filterList" />
    </section>
    <footerCom />
  </div>
</template>

<script>
// import headerCom from '../components/headerCom.vue'
import projectsListCom from '../components/projectsListCom.vue'
import footerCom from '../components/footerCom.vue'

export default {
  name: 'projectComp',
  components: {
    // headerCom,
    projectsListCom,
    footerCom
  },
  data () {
    return {
      currentProjectBtn: '',
      selectedProjectBtn: '',
      projectsList: [
        'Bathroom',
        'Bed Room',
        'Kitchan',
        'Living Area'],
      projects: [{
        tag: 'Bathroom',
        img: require('../assets/project1.png'),
        name: 'Minimal Bedroom',
        discription: 'Decor / Artchitecture'
      }, {
        tag: 'Bathroom',
        img: require('../assets/project3.png'),
        name: 'Classic Minimal Bedroom',
        discription: 'Decor / Artchitecture'
      }, {
        tag: 'Bed Room',
        img: require('../assets/project5.png'),
        name: 'Minimal Bedroom table',
        discription: 'Decor / Artchitecture'
      }, {
        tag: 'Bed Room',
        img: require('../assets/project7.png'),
        name: 'Modern Bedroom',
        discription: 'Decor / Artchitecture'
      }, {
        tag: 'Kitchan',
        img: require('../assets/project2.png'),
        name: 'Minimal Bedroom',
        discription: 'Decor / Artchitecture'
      }, {
        tag: 'Kitchan',
        img: require('../assets/project4.png'),
        name: 'Modern Bedroom',
        discription: 'Decor / Artchitecture'
      }, {
        tag: 'Living Area',
        img: require('../assets/project6.png'),
        name: 'System Table',
        discription: 'Decor / Artchitecture'
      }, {
        tag: 'Living Area',
        img: require('../assets/project8.png'),
        name: 'Modern Bedroom',
        discription: 'Decor / Artchitecture'
      }]
    }
  },
  computed: {
    filterList () {
      return this.selectedProjectBtn
        ? this.projects.filter((el) => el.tag.includes(this.selectedProjectBtn))
        : this.projects
    }
  },
  methods: {
    selectProject (project) {
      // добавляем стили кликнутой кнопке проекта
      // если уже есть кликнутая-текущая кнопка проекта,
      if (this.currentProjectBtn) {
        // делаем её не активной
        this.currentProjectBtn.target.classList.remove('btn_activ')
        // делаем активной кликнутую кнопку проекта
        event.target.classList.add('btn_activ')
        // делаем кликнутую кнопку проекта текущей
        this.currentProjectBtn = event
      } else {
        // если нет кликнутой-текущей кнопки проекта
        // делаем активной кликнутую кнопку проекта
        event.target.classList.add('btn_activ')
        // делаем кликнутую кнопку проекта текущей
        this.currentProjectBtn = event
      }
      // добавляем выбранный тег для фильтрации
      // если выбранный тег равен текущему - второй раз нажали на туже кнопку тега
      if (this.selectedProjectBtn === project) {
        // то отменяется фильтрация и показываются все статьи
        this.selectedProjectBtn = ''
        // и делаем не активной второй раз нажатую кнопку тега
        event.target.classList.remove('btn_activ')
      } else {
        // если выбранный тег не равен текущему, то происходит фильтрация по выбранному тегу
        this.selectedProjectBtn = project
      }
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
img {display: block;}

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
  background: url(../assets/project-banner.png) no-repeat center;
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
}

.hidden {
  display: none;
}

.content {
  margin-top: 200px;
}

.wrapper {
  margin-top: 46px;
  display: flex;
  justify-content: space-between;
  margin-left: 160px;
  margin-right: 160px;
  border-radius: 18px;
  border: 1px solid $indicatorColor;
}

.btn {
  padding: 26px 67px;
  border-style: none;
  border-radius: 18px;
  background: none;
  font-family: "Jost", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  /* 22.5px */
  letter-spacing: 0.36px;
  cursor: pointer;

  &_activ {
    background: $indicatorColor;
    color: #fff;
  }

  &:hover {
    background: $indicatorColor;
    color: #fff;
  }
}
</style>
