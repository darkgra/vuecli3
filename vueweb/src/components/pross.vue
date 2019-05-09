<template>
  <div class="pross">
    <div class="label">
      {{ val }}
      <span v-if="isshow">%</span>
    </div>
    <div class="pie_wrap" ref="pie"></div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图 把官网的东西改成import
import "echarts/lib/chart/pie";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
export default {
  name: "pross",
  props: {
    //这里牵扯到默认值
    title: { type: String, required: true },
    val: { type: Number, required: true },
    isshow: { type: Boolean, required: true, default: false }
  },
  data() {
    return {};
  },
  mounted() {
    this.geiyuan();
  },
  watch: {
    val: function() {
      this.geiyuan();
    }
  },
  methods: {
    geiyuan() {
      var data = [];
      if (this.isshow) {
        data.push({ value: this.val, name: "" });
        data.push({ value: 100 - this.val, name: "" });
      } else {
        data.push({ value: 0, name: "" });
        data.push({ value: 100, name: "" });
      }
      let myChart = echarts.init(this.$refs.pie);
      // 绘制图表
      myChart.setOption({
        color: ["rgb(102,288,103)", "rgb(150,150,150)"],
        series: [
          {
            name: this.title,
            type: "pie",
            radius: ["90%", "100%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "center",
                textStyle: {
                  fontSize: "40",
                  fontWeight: "bold"
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            //   data: [{ value: 30 }, { value: 70 }]注意只能写data
            data
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin pro {
  width: px2rem(175);
  height: px2rem(175);
}
.pross {
  position: relative;
  text-align: center;
  color: #000;
  .label {
    line-height: px2rem(160);
    @include pro;
    position: absolute;
    left: 0;
    top: 0;
    font-size: px2rem(48);
    span {
      vertical-align: super;
      font-size: $text-size;
    }
  }
  h3 {
    font-size: $text-size;
    padding: px2rem(27) 0 px2rem(52);
    line-height: $text-size;
  }
  .pie_wrap {
    @include pro;
  }
}
</style>
