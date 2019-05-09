<template>
  <div class="user">
    <tophead title="SFA">
      <!-- <router-link to="/user" slot="r" class="iconfont icon-user"></router-link> -->
    </tophead>
    <div>user</div>
  </div>
</template>

<script>
import tophead from "../components/tophead";
export default {
  name: "user",
  data() {
    return {};
  },
  components: {
    tophead: tophead
  }
};
</script>

<style lang="scss" scoped></style>
