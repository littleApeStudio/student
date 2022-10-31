<template>
  <div class="teacher_box">
    <div class="header">
      <el-page-header v-if="nowPage != 'index'" @back="goBack" :content="nav">
      </el-page-header>
      <div class="info">
        <div><span class="iconfont icon-touxiang"></span></div>
        <div>你好，张三</div>
        <div><span class="iconfont icon-tuichu"></span> 退出登录</div>
      </div>
    </div>
    <div>
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
import addTest from "./components/addTest.vue";
import outGrade from "./components/outGrade.vue";
import searchGrade from "./components/searchGrade.vue";
import searchStudent from "./components/searchStudent.vue";
export default {
  name: "Student",
  components: {
    index, //首页
    addTest, //添加考试
    outGrade, //到处成绩
    searchGrade, //查询成绩,
    searchStudent, //查询学生信息
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
      this.nav = "";
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
  width: 120px;
  color: #313131;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}
.header .info > div:nth-child(3):hover {
  color: #ff0000;
}
.content {
  padding: 20px;
  margin: auto;
  margin-top: 50px;
  width: 400px;
  height: auto;
  background: #fff;
  border-radius: 10px;
}
</style>