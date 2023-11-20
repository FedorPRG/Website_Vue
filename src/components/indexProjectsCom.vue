<template>
  <div class="projects__content">
    <div v-for="(project, index) in projects" :key="index" class="project">
      <img :src='project.img' alt="project">
      <div class="project__wrapper">
        <div>
          <div class="project__name">{{ project.name }}</div>
          <div class="project__discr">{{ project.discription }}</div>
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
  name: 'indexProjectsCom',
  props: ['projects']
}
</script>

<style lang="scss" scoped>
@import "../assets/style/vars";

.projects {
  &__content {
    margin-top: 93px;
    display: grid;
    grid-template-columns: repeat(2, 548px);
    row-gap: 56px;
    column-gap: 104px;
  }
}

.project {
  &__wrapper {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__name {
    color: $titleColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
  }

  &__discr {
    color: $textColor;
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
