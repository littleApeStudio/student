<template>
  <div class="fix">
    <div class="content">
      <el-form label-width="80px">
        <el-form-item label="姓名">
          <el-input disabled v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input disabled v-model="form.class"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input disabled v-model="form.schoolID"></el-input>
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
import { fix } from "@/api/student"
export default {
  name: "StudentFix",

  data() {
    return {
      form: {},
    };
  },

  created() {
    this.form = JSON.parse(sessionStorage.getItem("s_token"))
  },

  mounted() { },

  methods: {
    save() {
      var form = this.form
      if (form.age.length < 1 || form.sex.length < 1 || form.password.length < 1) {
        this.$message({
          message: "前检查是否已填写",
          type: "warning"
        })
      } else {
        this.$showLoading("修改中...");
        var data = {
          age: form.age,
          sex: form.sex,
          password: form.password,
          a_id: JSON.parse(sessionStorage.getItem("s_token")).a_id,
          s_id: JSON.parse(sessionStorage.getItem("s_token")).s_id,
        }
        fix(data).then((res) => {
          this.$hideLoading();
          if (res.code == 200) {
            this.$message({
              message: "修改成功",
              type: "success",
            });
            this.$emit('update:nowPage','index')
          } else {
            this.$message({
              message: res.msg,
              type: "error",
            });
          }
        }).catch((err) => {
          this.$hideLoading();
        })
      }
    }
  },
};
</script>
<style scoped>
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
<style>
.el-input.is-disabled .el-input__inner {
  background-color: #f9f9f9 !important;
  border-color: none;
  color: none;
  cursor: default !important;
}
</style>