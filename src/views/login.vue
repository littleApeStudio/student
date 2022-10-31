<template>
  <div class="index">
    <div class="login_box">
      <div class="title">学生成绩管理系统</div>
      <div class="content">
        <div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="学生登录" name="student">
              <div class="input">
                <el-form
                  label-position="right"
                  :model="userData"
                  status-icon
                  ref="userData"
                  label-width="100px"
                  class="demo-ruleForm"
                >
                  <el-form-item label-width="70px" label="学号" prop="username">
                    <el-input
                      v-model.number="userData.username"
                      placeholder="请输入学号"
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
                  <el-form-item label-width="70px">
                    <el-button
                      style="width: 100%"
                      type="primary"
                      @click="submitForm('userData')"
                      >登录</el-button
                    >
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>
            <el-tab-pane label="教师登录" name="teacher"
              ><div class="input">
                <el-form
                  label-position="right"
                  :model="userData"
                  status-icon
                  ref="userData"
                  label-width="100px"
                  class="demo-ruleForm"
                >
                  <el-form-item
                    label-width="70px"
                    label="用户名"
                    prop="username"
                  >
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
                  <el-form-item label-width="70px">
                    <el-button
                      style="width: 100%"
                      type="primary"
                      @click="submitForm('userData')"
                      >登录</el-button
                    >
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>
            <el-tab-pane label="管理员登录" name="admin"
              ><div class="input">
                <el-form
                  label-position="right"
                  :model="userData"
                  status-icon
                  ref="userData"
                  label-width="100px"
                  class="demo-ruleForm"
                >
                  <el-form-item label-width="70px" label="账号" prop="username">
                    <el-input
                      v-model.number="userData.username"
                      placeholder="请输入账号"
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
                  <el-form-item label-width="70px">
                    <el-button type="primary" @click="submitForm('userData')"
                      >立即登录</el-button
                    >
                    <el-button @click="register">注册</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { alogin } from "@/api/login";
export default {
  name: "StudentIndex",

  data() {
    return {
      activeName: "student",
      userData: {
        username: "",
        pass: "",
      },
    };
  },

  created(){
    sessionStorage.removeItem("a_token")
    sessionStorage.removeItem("s_token")
    sessionStorage.removeItem("t_token")
  },

  mounted() {},

  methods: {
    // 导航点击
    handleClick(tab, event) {
      console.log(tab, event);
      this.userData = {
        username: "",
        pass: "",
      };
    },
    // 登录按钮
    submitForm() {
      var form = this.userData;
      if (form.username == "" || form.pass == "") {
        this.$message({
          message: "请填写正确的账号和密码",
          type: "warning",
        });
      } else {
        if (this.activeName == "student") {
          this.slogin();
        } else if (this.activeName == "teacher") {
          this.tlogin();
        } else if (this.activeName == "admin") {
          this.alogin();
        }
      }
    },
    // 学生登录
    slogin() {
      sessionStorage.setItem("s_token", "res.data.a_id");
      this.$router.push("/");
    },
    // 教师登录
    tlogin() {
      sessionStorage.setItem("t_token", "res.data.a_id");
      this.$router.push("/");
    },
    // 管理员登录
    alogin() {
      this.$showLoading("登陆中...");
      alogin(this.userData)
        .then((res) => {
          this.$hideLoading();
          if (res.code == 200) {
            this.$message({
              message: "登录成功",
              type: "success",
            });
            this.userData = {
              username: "",
              pass: "",
            };
            sessionStorage.setItem("a_token", res.data.a_id);
            this.$router.push("/admin");
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
    },
    // 管理员注册
    register() {
      this.$router.push("/register");
    },
  },
};
</script>
<style scoped>
.index {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: #a8edea; /* 不支持线性的时候显示 */
  background-image: linear-gradient(to bottom right, #a8edea, #fed6e3);
}

.index .login_box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 390px;
  background: #fff;
  box-shadow: 0 0 5px #eeeeee;
  border-radius: 5px;
  user-select: none;
}

.login_box .title {
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  letter-spacing: 2px;
}

.login_box .content {
  width: 100%;
  height: calc(100% - 100px);
}

.content .input {
  padding: 20px 40px;
  flex: auto;
  min-width: 200px;
  height: calc(100% - 40px);
}
</style>
<style>
.el-tabs__nav-wrap {
  margin: auto;
  width: 263px;
}
</style>