<template>
  <div class="home">
    <tophead title="SFA">
      <router-link to="/user" slot="r" class="iconfont icon-user"></router-link>
    </tophead>
    <div class="main-body">
      <div class="data-wrap">{{ getyearm }}</div>
      <div class="zong-pross">
        <pross title="当前月进度" :val="gettian" :isshow="true"></pross>
        <pross title="月销售完成度" :val="yuemai" :isshow="true"></pross>
        <pross title="有效数商店数" :val="shangdian" :isshow="false"></pross>
      </div>
    </div>
    <div class="main-nav">
      <div class="nav-cell" v-for="i in 9" :key="i">
        <template v-if="i <= menulist.length">
          <menucell
            :url="menulist[i - 1].url"
            :imgurl="menulist[i - 1].imgurl"
            :menuname="menulist[i - 1].menuname"
          ></menucell>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/font_xwcbkbmser/iconfont.css";
import "../assets/font_dysibk7c79/iconfont.css";

import tophead from "../components/tophead";
import pross from "../components/pross";
import menucell from "../components/Menucell";

import axios from "axios";

var menulist = [
  {
    menuname: "公司通告",
    imgurl: require("@/assets/imgg/ggtz.png"),
    url: "/yi"
  },
  {
    menuname: "进店拜访",
    imgurl: require("@/assets/imgg/jdbf.png"),
    url: "/er"
  },
  {
    menuname: "电话订单",
    imgurl: require("@/assets/imgg/dhdd.png"),
    url: "/sa"
  },
  {
    menuname: "订单转态",
    imgurl: require("@/assets/imgg/ddzt.png"),
    url: "/si"
  },
  {
    menuname: "培训资料",
    imgurl: require("@/assets/imgg/pxzl.png"),
    url: "/wu"
  },
  {
    menuname: "消息中心",
    imgurl: require("@/assets/imgg/xxzx.png"),
    url: "/li"
  },
  {
    menuname: "新增门店",
    imgurl: require("@/assets/imgg/xzmd.png"),
    url: "/qi"
  },
  {
    menuname: "同步数据",
    imgurl: require("@/assets/imgg/sjtb.png"),
    url: "/ba"
  }
];

export default {
  name: "home",
  components: {
    tophead: tophead,
    pross: pross,
    menucell: menucell
  },
  data() {
    return {
      shangdian: 169,
      yuemai: 50,
      menulist: menulist
    };
  },
  computed: {
    getyearm() {
      var gdate = new Date();
      return `${gdate.getFullYear()}年${gdate.getMonth() + 1}月`;
    },
    gettian() {
      var gdate = new Date();
      return parseInt((gdate.getDate() / 30) * 100);
    }
  },
  created() {
    axios.get("http://127.0.0.1:3000/shuju").then(res => {
      this.shangdian = res.data.mope;
      this.yuemai = res.data.tosh;
    });
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .main-nav {
    background-color: #fff;
    flex: 1;
    padding: 0 px2rem(30);
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: stretch;
    border-top: 3px #ccc solid;
    .nav-cell {
      border-bottom: 2px solid #ccc;
      border-right: 2px solid #ccc;
      flex: 1 1 30%;
    }
    .nav-cell:nth-child(3n) {
      border-right: none;
    }
  }
}
.main-body {
  background-color: #fff;
  .data-wrap {
    padding: px2rem(40) 0 px2rem(22);
    color: #000;
    font-size: $text-size-mid;
    text-align: center;
  }
  .zong-pross {
    display: flex;
    justify-content: space-around;
  }
}

#pie {
  width: px2rem(500);
  height: px2rem(400);
}
</style>
