<template>
  <div class="projects">
    <div class="projects__item" v-for="(project, index) in projects" :key="index">
      <img :src="project.img" alt="project">
      <div class="wrapper">
        <div>
          <div class="name">{{ project.name }}</div>
          <div class="text">{{ project.discription }}</div>
        </div>
        <router-link to="/projectDetails">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
          <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projectsListCom',
  props: ['projects'],

  computed: {
    filterList () {
      return this.selectedTag
        ? this.articlesList.filter((el) => el.tag.includes(this.selectedTag))
        : this.articlesList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/vars";

.projects {
  max-height: 3230px;
  margin-top: 61px;
  column-count: 2
}

.wrapper {
  margin-top: 24px;
  width: 585px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  color: $titleColor;
  font-family: "DM Serif Display", sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
  letter-spacing: 0.5px;
}

.text {
  color: $textColor;
  font-family: "Jost", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}
</style>
