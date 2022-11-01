<template>
  <div class="student">
    <div class="header">
      <el-page-header v-if="nowPage != 'index'" @back="goBack" :content="nav">
      </el-page-header>
      <div class="info">
        <div><span class="iconfont icon-touxiang"></span></div>
        <div>你好，张三</div>
        <div @click="fixed">
          <span class="iconfont icon-xiugai"></span> 修改信息
        </div>
        <div><span class="iconfont icon-tuichu"></span> 退出登录</div>
      </div>
    </div>
    <div class="contentBox">
      <component
        :is="nowPage"
        :nowPage.sync="nowPage"
        :nav.sync="nav"
      ></component>
    </div>
  </div>
</template>
<script>
import index from "./components/index.vue";
import fix from "./components/fix.vue";
import test from "./components/test.vue";
import grade from "./components/grade.vue";
import testing from "./components/testing.vue";
export default {
  name: "StudentLogin",
  components: {
    index,
    fix,
    test,
    grade,
    testing,
  },
  data() {
    return {
      nav: "",
      nowPage: "index",
    };
  },

  mounted() {},

  methods: {
    goBack() {
      this.nowPage = "index";
      this.nav = ""
    },
    fixed() {
      this.nowPage = "fix";
      this.nav = "修改信息"
    },
  },
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont"; /* Project id 3739913 */
  src: url("//at.alicdn.com/t/c/font_3739913_q3h7plgl4f.woff2?t=1667200530191")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_3739913_q3h7plgl4f.woff?t=1667200530191")
      format("woff"),
    url("//at.alicdn.com/t/c/font_3739913_q3h7plgl4f.ttf?t=1667200530191")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xiugai:before {
  content: "\e607";
}

.icon-tuichu:before {
  content: "\e60c";
}

.icon-touxiang:before {
  content: "\e679";
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;
  width: calc(100% - 40px);
  height: 56px;
  line-height: 56px;
  background: #fff;
  border-bottom: 1px solid #eeeeee;
  display: flex;
}
.header .el-page-header {
  line-height: 56px;
}
.header .info {
  flex: 1;
  height: 56px;
  line-height: 56px;
  display: flex;
  justify-content: flex-end;
}
.header .info > div:nth-child(1) {
  margin: 8px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #eeeeee;
  color: #fff;
  font-size: 25px;
  line-height: 40px;
}
.header .info > div:nth-child(2) {
  padding: 0 20px;
  color: #313131;
  font-size: 16px;
}
.header .info > div:nth-child(3) {
  width: 100px;
  color: #313131;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}
.header .info > div:nth-child(3):hover {
  color: #0278ff;
  font-size: 16px;
}
.header .info > div:nth-child(4) {
  width: 120px;
  color: #313131;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}
.header .info > div:nth-child(4):hover {
  color: #ff0000;
}
.contentBox{
  padding-top: 56px;
  width: 100%;
  height: 100%;
}
</style>