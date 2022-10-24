<template>
  <div class="fix">
    <div class="header">
      <el-page-header @back="goBack" content="修改信息"> </el-page-header>
    </div>
    <div class="content">
      <el-form label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" align="left">
          <el-select v-model="form.sex" placeholder="请选择">
            <el-option label="男" value="男"> </el-option>
            <el-option label="女" value="女"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "StudentFix",

  data() {
    return {
      form: {},
    };
  },

  mounted() {},

  methods: {
    goBack() {
      this.$emit("update:nowPage", "index");
    },
  },
};
</script>
<style scoped>
.fix {
  margin: auto;
  width: 100%;
  height: auto;
}
.fix .header {
  padding: 0 20px;
  width: calc(100% - 40px);
  height: 56px;
  line-height: 56px;
  background: #fff;
}
.fix .header .el-page-header {
  line-height: 56px;
}
.fix .content {
  padding: 20px;
  margin: auto;
  margin-top: 50px;
  width: 400px;
  height: auto;
  background: #fff;
  border-radius: 10px;
}
</style>