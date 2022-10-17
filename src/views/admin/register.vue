<template>
  <div class="login_box">
    <div class="login">
      <el-form
        label-position="right"
        :model="userData"
        status-icon
        :rules="rules"
        ref="userData"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label-width="70px" label="用户名" prop="username">
          <el-input
            v-model.number="userData.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="密码" prop="pass">
          <el-input
            type="password"
            v-model="userData.pass"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="userData.checkPass"
            autocomplete="off"
            placeholder="请再次输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label-width="70px">
          <el-button style="width:100%" type="primary" @click="submitForm('userData')"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkusername = (rule, value, callback) => {
      if (String(value).length < 3) {
        callback(new Error("用户名至少为 3 位数"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码至少为 6 位数"));
      } else {
        if (this.userData.checkPass !== "") {
          this.$refs.userData.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userData.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userData: {
        username: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkusername, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.login_box {
  width: 100%;
  height: 100%;
}

.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 350px;
  height: auto;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid #eeeeee;
  box-shadow: 0 0 10px #dddddd;
}
</style>
<style>
body {
  background: #f7f7f7;
}
</style>
