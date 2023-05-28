<template>
<div class="free">FREE</div>
</template>

<script>
export default {
  name: "Free"
}
</script>

<style lang="scss">
.free {
  display: block;
  min-width: 120px;
  background: transparent url("../../assets/images/free.svg") no-repeat center / contain;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.3;
  padding: 2px 20px;
  font-family: Rajdhani, sans-serif;
  text-align: center;
  @media screen and (max-width: 1239px) {
    min-width: 9.68vw;
    font-size: 1.61vw;
    padding: .16vw 1.61vw;
  }
  @media screen and (max-width: 800px) {
    font-size: 13px;
    min-width: 80px;
    padding: 2px 10px 1px;
  }
}
</style>