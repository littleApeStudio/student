<template>
  <div class="student">
    <div class="infos">
      <div>
        <div>姓名：</div>
        <div>张三</div>
      </div>
      <div>
        <div>年龄：</div>
        <div>21</div>
      </div>
      <div>
        <div>性别：</div>
        <div>女</div>
      </div>
      <div>
        <div>班级：</div>
        <div>30</div>
      </div>
      <div>
        <div>学号：</div>
        <div>19013005</div>
      </div>
    </div>
    <div class="content">
      <div>修改信息</div>
      <div>参加考试</div>
      <div>查询成绩</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "StudentLogin",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.student {
  width: 100%;
  height: 100%;
}

.student .infos {
  padding: 20px 0;
  margin: auto;
  margin-top: 40px;
  width: 640px;
  height: auto;
  background: #ffffff;
  border-radius: 20px;
}

.student .infos > div {
  margin: auto;
  width: calc(100% - 100px);
  display: flex;
}

.student .infos > div>div:nth-child(1) {
  width: 100px;
  height: 50px;
  line-height: 50px;
  color: #515151;
  font-size: 16px;
  text-align: left;
}

.student .infos > div>div:nth-child(2) {
  flex: 1;
  height: 50px;
  line-height: 50px;
  color: #313131;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
}
.student .content {
  margin: auto;
  margin-top: 20px;
  width: 660px;
  height: auto;
  display: flex;
}
.student .content > div {
  margin: 0 10px;
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
}
.student .content > div:nth-child(1) {
  background: #44c2fd;
}
.student .content > div:nth-child(1):hover {
  box-shadow: 0 5px 5px #04b0ff;
}
.student .content > div:nth-child(2) {
  background: #9854cb;
}
.student .content > div:nth-child(2):hover {
  box-shadow: 0 5px 5px #a02bfa;
}
.student .content > div:nth-child(3) {
  background: #f55951;
}
.student .content > div:nth-child(3):hover {
  box-shadow: 0 5px 5px #fc3127;
}
</style>
<style>
body {
  background: #eeeeee;
}
</style>