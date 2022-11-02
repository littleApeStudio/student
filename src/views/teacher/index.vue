<template>
  <div class="teacher_box">
    <el-menu
      :default-active="nowPage"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#ffffff"
      text-color="#313131"
      active-text-color="#3a9efd"
    >
      <el-menu-item index="searchStudent">查询学生信息</el-menu-item>
      <el-menu-item index="addShiti">添加试题</el-menu-item>
      <el-menu-item index="addTest">添加考试</el-menu-item>
      <el-menu-item index="searchGrade">查询成绩</el-menu-item>
      <el-menu-item index="notice">通知</el-menu-item>
      <div class="info">
        <div><span class="iconfont icon-touxiang"></span></div>
        <div>你好，{{userInfo.name}}</div>
        <div @click="exit"><span class="iconfont icon-tuichu"></span> 退出登录</div>
      </div>
    </el-menu>
    <div>
      <component
        :is="nowPage"
        :nowPage.sync="nowPage"
      ></component>
    </div>
  </div>
</template>
<script>
import addShiti from "./components/addShiti.vue";
import addTest from "./components/addTest.vue";
import searchGrade from "./components/searchGrade.vue";
import searchStudent from "./components/searchStudent.vue";
import notice from "./components/notice.vue";
export default {
  name: "Student",
  components: {
    addShiti, //添加试题
    addTest, //添加考试
    searchGrade, //查询成绩,
    searchStudent, //查询学生信息
    notice, //通知
  },
  data() {
    return {
      userInfo: {},
      nowPage: "searchStudent",
    };
  },

  created(){
    var t = sessionStorage.getItem("t_token")
    if (t == null){
      this.$message({
        message: "你还没有登陆哦！",
        type: "warning"
      })
      this.$router.push('/login')
    } else {
      this.userInfo = JSON.parse(t)
    }
  },

  mounted() {},

  methods: {
    handleSelect(key, keyPath) {
      this.nowPage = key
    },
    exit(){
      this.$router.push('/login')
    }
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
.info {
  flex: 1;
  height: 56px;
  line-height: 56px;
  display: flex;
  justify-content: flex-end;
}
.info > div:nth-child(1) {
  margin: 8px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #eeeeee;
  color: #fff;
  font-size: 25px;
  line-height: 40px;
}
.info > div:nth-child(2) {
  padding: 0 20px;
  color: #313131;
  font-size: 16px;
}
.info > div:nth-child(3) {
  width: 120px;
  color: #313131;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}
.info > div:nth-child(3):hover {
  color: #ff0000;
}
.el-menu {
  padding-left: 20px;
  user-select: none;
}
</style>