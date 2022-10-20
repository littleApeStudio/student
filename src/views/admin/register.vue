<template>
  <div class="register_box">
    <div class="register">
      <div class="logo"><img src="@/assets/logo.png" /></div>
      <el-form label-position="right" :model="userData" status-icon :rules="rules" ref="userData" label-width="100px"
        class="demo-ruleForm">
        <el-form-item label-width="70px" label="姓名" prop="name">
          <el-input v-model.number="userData.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="用户名" prop="username">
          <el-input v-model.number="userData.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="密码" prop="pass">
          <el-input type="password" v-model="userData.pass" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label-width="70px" label="确认密码" prop="checkPass">
          <el-input type="password" v-model="userData.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
        </el-form-item>
        <el-form-item label-width="70px">
          <el-button style="width: 100%" type="primary" @click="submitForm('userData')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/admin"
export default {
  data() {
    var checkname = (rule, value, callback) => {
      if (String(value).length < 2) {
        callback(new Error("姓名至少为 2 位数"));
      } else {
        callback();
      }
    };
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
        name: "",
        username: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        name: [{ validator: checkname, trigger: "blur" }],
        username: [{ validator: checkusername, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  created() {
    console.log(window.location.port)
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$showLoading("注册中...")
          register(this.userData).then((res) => {
            this.$hideLoading()
            if (res.code == 200) {
              this.$message({
                message: "注册成功",
                type: "success"
              })
              this.userData = {
                name: '',
                username: '',
                pass: '',
                checkPass: ''
              }
              this.$router.push('/admin/login')
            } else {
              this.$message({
                message: res.msg,
                type: "error"
              })
            }
          }).catch((err) => {
            this.$hideLoading()
          })
        } else {
          this.$message({
            message: "请先填写数据",
            type: "warning"
          })
        }
      });
    }
  },
};
</script>
<style scoped>
.register_box {
  width: 100%;
  height: 100%;
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
