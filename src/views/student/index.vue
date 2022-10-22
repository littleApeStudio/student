<template>
  <div class="student">
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
  box-shadow: 5px 0 5px #04b0ff;
}
.student .content > div:nth-child(2) {
  background: #9854cb;
}
.student .content > div:nth-child(2):hover {
  box-shadow: 5px 0 5px #a02bfa;
}
.student .content > div:nth-child(3) {
  background: #f55951;
}
.student .content > div:nth-child(3):hover {
  box-shadow: 5px 0 5px #fc3127;
}
</style>
<style>
body {
  background: #eeeeee;
}
</style>