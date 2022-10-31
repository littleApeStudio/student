<template>
  <div class="register_box">
    <div class="register">
      <div class="logo"><img src="@/assets/logo.png" /></div>
      <el-form label-position="right" :model="userData" status-icon ref="userData" label-width="100px"
        class="demo-ruleForm">
        <el-form-item label-width="70px" label="姓名" prop="name">
          <el-input v-model.number="userData.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="账号" prop="username">
          <el-input v-model.number="userData.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="密码" prop="pass">
          <el-input type="password" v-model="userData.pass" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="确认密码" prop="checkPass">
          <el-input type="password" v-model="userData.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item label-width="70px">
          <el-button type="primary" @click="submitForm('userData')">立即注册</el-button>
          <el-button @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/login";
export default {
  data() {
    return {
      userData: {
        name: "",
        username: "",
        pass: "",
        checkPass: "",
      },
    };
  },
  created() {
    console.log(window.location.port);
  },
  methods: {
    submitForm() {
      var form = this.userData
      if (form.name != "" || form.username != "" || form.pass != "" || form.checkPass == form.pass) {
        this.$showLoading("注册中...");
        register(this.userData)
          .then((res) => {
            this.$hideLoading();
            if (res.code == 200) {
              this.$message({
                message: "注册成功",
                type: "success",
              });
              this.userData = {
                name: "",
                username: "",
                pass: "",
                checkPass: "",
              };
              this.$router.push("/login");
            } else {
              this.$message({
                message: res.msg,
                type: "error",
              });
            }
          })
          .catch((err) => {
            this.$hideLoading();
          });
      } else {
        this.$message({
          message: "请检查填写的数据",
          type: "warning",
        });
      }
    },
    // 管理员登录
    login() {
      this.$router.push("/login")
    }
  },
};
</script>
<style scoped>
.register_box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #a8edea;
  /* 不支持线性的时候显示 */
  background-image: linear-gradient(to bottom right, #a8edea, #fed6e3);
}

.register {
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

.register .logo {
  padding-bottom: 20px;
  margin: auto;
  margin-top: -70px;
  width: 100px;
  height: 100px;
}

.register .logo>img {
  width: 100%;
  height: 100%;
}
</style>
<style>
body {
  background: #f7f7f7;
}
</style>
