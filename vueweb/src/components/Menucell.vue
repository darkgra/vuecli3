<template>
  <div class="menucell">
    <router-link :to="url">
      <div class="img-warp">
        <img :src="imgurl" :alt="menuname" />
      </div>
      <div class="title-warp">{{ menuname }}</div>
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "menucell",
  props: ["menuname", "imgurl", "url"]
};
</script>

<style lang="scss" scoped>
.menucell {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: $text-size;
  text-align: center;
  color: #000;
  .img-warp {
    width: px2rem(62);
    height: px2rem(62);
    display: inline-block;
    margin-bottom: px2rem(36);
  }
}
</style>
