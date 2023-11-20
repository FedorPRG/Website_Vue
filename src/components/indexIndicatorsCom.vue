<template>
  <section class="indicators center">
    <div v-for="(indicator, index) in indicators" :key="index" class="indicators__item">
      <div class="indicators__quantity">{{ indicator.quantity }}</div>
      <div class="indicators__name">{{ indicator.name }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'indexIndicatorsCom',
  props: ['indicators']
}
</script>

<style lang="scss" scoped>
@import "../assets/style/vars";

.indicators {
  justify-content: center;
  margin-top: 100px;
  background-color: $indicatorsBackColor;
  height: 457px;
  display: flex;
  gap: 130px;

  &__item {
    padding-top: 151px;
    width: 192px;
    position: relative;

    &:not(:last-child)::after {
      content: " ";
      background: $indicatorColor;
      width: 1px;
      height: 130px;
      top: 169px;
      left: 250px;
      position: absolute;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__quantity {
    color: $indicatorColor;
    font-family: "DM Serif Display", sans-serif;
    font-size: 85px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 106.25px */
    letter-spacing: 1.7px;
  }

  &__name {
    margin-top: 16px;
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
