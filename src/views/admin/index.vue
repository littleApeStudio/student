<template>
  <div class="admin">
    <div class="left_menu">
      <el-menu
        class="el-menu-vertical-demo"
        default-active="0"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-menu-item index="0">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span slot="title">用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">教师用户</el-menu-item>
            <el-menu-item index="1-2">学生用户</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-order"></i>
            <span slot="title">学院管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">科目管理</el-menu-item>
            <el-menu-item index="2-2">班级管理</el-menu-item>
            <el-menu-item index="2-3">课程管理</el-menu-item>
            <el-menu-item index="2-4">试题管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">其他管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">编写通知</el-menu-item>
            <el-menu-item index="3-2">成绩统计</el-menu-item>
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    menu() {
      this.isCollapse == true
        ? (this.isCollapse = false)
        : (this.isCollapse = true);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
.admin .right {
  flex: auto;
  height: 100%;
}
.admin .right .nav {
  width: 100%;
  height: 56px;
  background: #ffffff;
}
.admin .right .nav .menuopen {
  width: 56px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  color: #909399;
  font-size: 20px;
}
</style>
<style>
body {
  background: #f7f7f7;
}
</style>