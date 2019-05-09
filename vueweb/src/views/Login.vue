<template>
  <div class="login">
    <h1>欢迎登录我的SFA系统</h1>
    <div class="top-hat"></div>
    <div class="login-box">
      <div class="waibianju">
        <div class="logo-box"></div>
      </div>
      <div
        class="input-group"
        :class="{ sbactive: act_index === 1, error: errors.has('cno') }"
      >
        <label for="cm_code">公司编号:</label>
        <input
          name="cno"
          v-validate="{ required: true, max: 6, min: 4 }"
          @focus="act_index = 1"
          type="number"
          id="cm_code"
          v-model="cm_code"
        />
      </div>
      <div
        class="input-group"
        :class="{ sbactive: act_index === 2, error: errors.has('cnoy') }"
      >
        <label for="PNO">员工编号:</label>
        <input
          name="cnoy"
          v-validate="{ required: true, max: 10, min: 8 }"
          @focus="act_index = 2"
          type="number"
          id="PNO"
          v-model="PNG"
        />
      </div>
      <div
        class="input-group"
        :class="{ sbactive: act_index === 3, error: errors.has('cnoe') }"
      >
        <label for="Passwd">用户密码:</label>
        <input
          name="cnoe"
          v-validate="{ required: true, max: 15, min: 6 }"
          @focus="act_index = 3"
          type="password"
          id="Passwd"
          v-model="Passwd"
        />
      </div>
      <div class="row">
        <div class="chbox" @click="remembset" :class="{ sbactive: rememb }">
          <i
            class="iconfont"
            :class="{ 'icon-weigouxuan': !rememb, 'icon-yigouxuan': rememb }"
          ></i>
          <span>记住密码</span>
        </div>
        <div
          class="chbox"
          @click="autologinset"
          :class="{ sbactive: autologin }"
        >
          <i
            class="iconfont"
            :class="{
              'icon-weigouxuan': !autologin,
              'icon-yigouxuan': autologin
            }"
          ></i>
          <span>自动登录</span>
        </div>
      </div>
    </div>
    <div class="btn-wrap" @click="loginclick">
      <p>登录</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Indicator } from "mint-ui";
import { Toast } from "mint-ui";
import axios from "axios";
import "../assets/font_1128533_knenb312le/iconfont.css";
export default {
  name: "Login",
  data() {
    return {
      act_index: 1,
      cm_code: "",
      PNG: "",
      Passwd: "",
      rememb: false,
      autologin: false
    };
  },
  mounted() {
    var ldata = JSON.parse(localStorage.getItem("login_data"));
    if (ldata) {
      this.cm_code = ldata.cm_code;
      this.PNG = ldata.PNO;
      this.Passwd = ldata.Passwd;
      this.rememb = ldata.rememb;
      this.autologin = ldata.autologin;
    }

    if (this.autologin) {
      this.loginclick();
    }

    this.$validator.validate();
  },
  methods: {
    ...mapMutations(["inituser"]),
    autologinset() {
      this.autologin = !this.autologin;
      // this.autologin&&(this.rememb=true);
      if (this.autologin === true) {
        this.rememb = true;
      }
    },
    remembset() {
      this.rememb = !this.rememb;
      // this.autologin&&(this.rememb=true);
      if (this.rememb === false) {
        this.autologin = false;
      }
    },
    loginclick() {
      if (this.errors.any()) {
        let ice = Toast({
          message: "密码账号有错误.....",
          className: "klkl"
        });
        setTimeout(() => {
          ice.close();
        }, 1000);
      } else {
        Indicator.open("正在登陆中....");
        // setTimeout(()=>{
        //   Indicator.close();
        // },2000)
        axios
          .post("http://127.0.0.1:3000/denglu", {
            CNO: this.cm_code,
            PNO: this.PNG,
            Passwd: this.Passwd
          })
          .then(res => {
            localStorage.setItem(
              "login_data",
              JSON.stringify({
                rememb: this.rememb,
                autologin: this.autologin,
                CNO: this.rememb ? this.cm_code : "",
                Passwd: this.rememb ? this.Passwd : "",
                PNG: this.rememb ? this.PNG : ""
              })
            );
            //把数据放到sesstionstoreage里面一份
            sessionStorage.setItem("loginuser", JSON.stringify(res.data.user));
            //把当前登陆用户信息加入到vuex中
            // this.$store.commit('inituser',res.data.user);
            this.inituser(res.data.user);
            setTimeout(() => {
              Indicator.close();
              this.$router.push("/home");
            }, 1000);
            console.log(res.data);
          })
          .catch(e => {
            console.log("登陆失败，请检查网络", e);
            setTimeout(() => {
              Indicator.close();
            }, 1000);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: px2rem(36);
  height: px2rem(36);
  padding: px2rem(148-36-44) 0 px2rem(44) 0;
  line-height: px2rem(36);
  color: #fff;
}

.login {
  background-color: #2ade69;
  height: 100%;

  .top-hat {
    width: px2rem(537);
    height: px2rem(18);
    background-color: #eee;
    margin: 0 auto;
    border-radius: px2rem(18) px2rem(18) 0 0;
  }

  .login-box {
    width: px2rem(600);
    height: px2rem(836);
    background-color: #fff;
    margin: 0 auto;
    border-radius: px2rem(20);
    .waibianju {
      padding: px2rem(80);
      .logo-box {
        width: px2rem(190);
        height: px2rem(190);
        margin: 0 auto;
        background: url("../assets/logo.jpg");
        background-size: cover;
      }
    }
    @mixin sbyi {
      padding: 0 px2rem(36);
      color: $text-color;
      width: px2rem(401);
    }
    .input-group {
      border: 2px solid #e2e2e2;
      border-radius: px2rem(45);
      font-size: $text-size-mid;
      line-height: px2rem(90);
      @include sbyi();
      margin: 0 auto px2rem(30);
      input {
        border: 0 none;
        font-size: $text-size-mid;
        line-height: px2rem(90);
        width: px2rem(220);
        margin-left: 1em;
      }
    }
    .input-group.sbactive {
      color: $act-color;
      border: 2px solid $act-color;
    }
    .input-group.error {
      color: red;
      border: 2px solid red;
    }
    .row {
      font-size: $text-size;
      @include sbyi();
      display: flex;
      justify-content: space-around;
      .chbox {
        padding: px2rem(36);
        i::before {
          display: inline-block;
          width: px2rem(32);
          height: px2rem(32);
          font-size: px2rem(32);
        }
      }
      .chbox.sbactive {
        color: $act-color;
      }
    }
  }
  .btn-wrap {
    width: px2rem(600);
    height: px2rem(100);
    border-radius: px2rem(20);
    background-color: #fff;
    margin: 0 auto;
    font-size: $text-size-imp;
    color: $act-color;
    text-align: center;
    line-height: px2rem(100);
    margin-top: px2rem(20);
    font-weight: 900;
    letter-spacing: px2rem(20);
  }
}
</style>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
.klkl {
  transform: scale(2, 2) !important;
  margin-left: -8%;
}
</style>
