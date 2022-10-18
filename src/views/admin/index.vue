<template>
  <div>
    <div>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
</style>
<style>
body {
  background: #f7f7f7;
}
</style>