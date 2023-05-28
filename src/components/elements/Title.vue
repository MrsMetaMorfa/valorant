<template>
<div class="title container">
  <h3 class="title_text">{{ title }}</h3>
  <hr class="title_line" />
</div>
</template>

<script>
export default {
  name: "Title",
  props: ['title']
}
</script>

<style lang="scss">
.title {
  align-items: center;
  margin-bottom: 20px;
  @media screen and (max-width: 1239px) {
    margin-bottom: 1.61vw;
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 640px) {
    margin-bottom: 20px;
  }
  &_text {
    width: auto;
    margin: 0 12px 0 0;
    font-size: 24px;
    line-height: 1.292;
    text-transform: uppercase;
    color: #FF4654;
    font-weight: bold;
    white-space: nowrap;
    @media screen and (max-width: 1239px) {
      font-size: 1.94vw;
      margin-right: .97vw;
    }
    @media screen and (max-width: 800px) {
      font-size: 18px;
      margin-right: 10px;
    }
  }
  &_line {
    width: 100%;
    border: 1px solid #FF4654;
    display: block;
  }
}
</style>