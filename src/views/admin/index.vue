<template>
  <div class="admin">
    <div class="left_menu">
      <el-menu class="el-menu-vertical-demo" default-active='{"path":"index","name":"首页"}' :collapse="isCollapse"
        @select="selected">
        <div class="logo">
          <div><img src="@/assets/logo.png" /></div>
          <div :style="isCollapse == false ? 'display:block' : 'display:none'">
            学生管理系统
          </div>
        </div>
        <el-menu-item index='{"path":"index","name":"首页"}'>
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="用户管理">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span slot="title">用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index='{"path":"teacher","name":"教师管理"}'>教师管理</el-menu-item>
            <el-menu-item index='{"path":"student","name":"学生管理"}'>学生管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="学院管理">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span slot="title">学院管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index='{"path":"kemu","name":"科目管理"}'>科目管理</el-menu-item>
            <el-menu-item index='{"path":"classs","name":"班级管理"}'>班级管理</el-menu-item>
            <el-menu-item index='{"path":"course","name":"课程管理"}'>课程管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="其他管理">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">其他管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index='{"path":"notice","name":"编写通知"}'>编写通知</el-menu-item>
            <el-menu-item index='{"path":"shiti","name":"试题管理"}'>试题管理</el-menu-item>
            <el-menu-item index='{"path":"grade","name":"成绩统计"}'>成绩统计</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right">
      <div class="nav">
        <div class="menuopen">
          <i @click="menu" :class="isCollapse == false ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
        </div>
        <div class="tip">
          <el-breadcrumb class="tip" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item, index) in menuTip" :key="index">{{
                item
            }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>

        <div class="info">
          <div @click="exit"><span class="iconfont icon-tuichu"></span> 退出登录</div>
        </div>
      </div>
      <div class="content">
        <component :is="nowPage" :nowPage.sync="nowPage"></component>
      </div>
    </div>
  </div>
</template>
<script>
import index from "./components/index.vue"; //首页
import teacher from "./components/teacher.vue"; //教师管理
import student from "./components/student.vue"; //学生管理
import kemu from "./components/kemu.vue"; //科目管理
import classs from "./components/class.vue"; //班级管理
import course from "./components/course.vue"; //课程管理
import shiti from "./components/shiti.vue"; //试题管理
import notice from "./components/notice.vue"; //通知管理
import grade from "./components/grade.vue"; //成绩统计
export default {
  components: {
    index, //首页
    teacher, //教师管理
    student, //学生管理
    kemu, //科目管理
    classs, //班级管理
    course, //课程管理
    shiti, //试题管理
    notice, //通知管理
    grade, //成绩统计
  },
  data() {
    return {
      // 导航栏收缩
      isCollapse: false,
      // 当前页面
      nowPage: "index",
      // 全部页面
      allPages: [
        "index",
        "teacher",
        "student",
        "kemu",
        "classs",
        "course",
        "shiti",
        "notice",
        "grade",
      ],
      // 导航进度
      menuTip: ["首页"],
    };
  },
  created() {
    var a_token = sessionStorage.getItem("a_token");
    if (a_token == null) {
      this.$message({
        message: "你还没有登录哦",
        type: "warning",
      });
      this.$router.push("/login");
    }
  },
  methods: {
    // 菜单收缩
    menu() {
      this.isCollapse == true
        ? (this.isCollapse = false)
        : (this.isCollapse = true);
    },
    // 菜单点击
    selected(key, keyPath) {
      var menuName1 = keyPath[0];
      var menuName2 = JSON.parse(key).name;
      var path = JSON.parse(key).path;
      this.nowPage = path;
      if (menuName2 == "首页") {
        this.menuTip = [menuName2];
      } else {
        this.menuTip = [menuName1, menuName2];
      }
    },
    // 退出登录
    exit(){
      sessionStorage.removeItem("a_token")
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
.admin {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

.admin .left_menu {
  width: auto;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: #ffffff;
  border-right: solid 1px #e6e6e6;
}

.admin .left_menu .el-menu-vertical-demo {
  text-align: left;
  border: none;
}

.admin .left_menu .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

.admin .left_menu .logo {
  width: auto;
  min-width: 64px;
  height: 56px;
  display: flex;
  justify-content: center;
}

.admin .left_menu .logo>div:nth-child(1) {
  padding: 0 4px;
  width: 56px;
  height: 56px;
}

.admin .left_menu .logo>div:nth-child(1)>img {
  margin: 10px;
  width: 36px;
  height: 36px;
}

.admin .left_menu .logo>div:nth-child(2) {
  padding-right: 10px;
  width: auto;
  height: 56px;
  line-height: 56px;
}

.admin .right {
  flex: auto;
  height: 100%;
}

.admin .right .nav {
  width: 100%;
  height: 56px;
  background: #ffffff;
  display: flex;
}

.admin .right .nav .menuopen {
  width: 56px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  color: #909399;
  font-size: 20px;
}

.admin .right .nav .menuopen:hover {
  color: #409eff;
}

.admin .right .nav .tip .tip {
  width: 300px;
  height: 56px;
  line-height: 56px;
  color: #909399;
  font-size: 14px;
  cursor: pointer;
}
.admin .right .nav .info {
  flex: 1;
  height: 56px;
  line-height: 56px;
  display: flex;
  justify-content: flex-end;
}
.admin .right .nav .info > div:nth-child(1) {
  width: 120px;
  color: #313131;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}
.admin .right .nav .info > div:nth-child(1):hover {
  color: #ff0000;
}

.admin .right .content {
  width: 100%;
  height: calc(100% - 56px);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
<style>
body {
  background: #f7f7f7;
}

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: #dddddd;
  border-radius: 2px;
}

::-webkit-scrollbar-track {
  background-color: none;
}

::-webkit-scrollbar-thumb:horizontal {
  background-color: none;
}

::-webkit-scrollbar-track:horizontal {
  background-color: none;
}

::-webkit-scrollbar-corner {
  background-color: none;
}
</style>