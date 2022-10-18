<template>
  <div class="admin">
    <div class="left_menu">
      <el-menu
        class="el-menu-vertical-demo"
        default-active="index"
        :collapse="isCollapse"
        @select="selected"
      >
        <div class="logo">
          <div><img src="@/assets/logo.png" /></div>
          <div :style="isCollapse == false ? 'display:block' : 'display:none'">
            学生管理系统
          </div>
        </div>
        <el-menu-item index="index">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="用户管理">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span slot="title">用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="teacher">教师管理</el-menu-item>
            <el-menu-item index="student">学生管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="学院管理">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span slot="title">学院管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="kemu">科目管理</el-menu-item>
            <el-menu-item index="classs">班级管理</el-menu-item>
            <el-menu-item index="course">课程管理</el-menu-item>
            <el-menu-item index="shiti">试题管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="其他管理">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">其他管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="notice">编写通知</el-menu-item>
            <el-menu-item index="grade">成绩统计</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right">
      <div class="nav">
        <div class="menuopen">
          <i
            @click="menu"
            :class="isCollapse == false ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
          ></i>
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
    };
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
      console.log(key,keyPath);
      this.nowPage = key
    },
  },
};
</script>
<style scoped>
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
.admin .left_menu .logo > div:nth-child(1) {
  padding: 0 4px;
  width: 56px;
  height: 56px;
}
.admin .left_menu .logo > div:nth-child(1) > img {
  margin: 10px;
  width: 36px;
  height: 36px;
}
.admin .left_menu .logo > div:nth-child(2) {
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