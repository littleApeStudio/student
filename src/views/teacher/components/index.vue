<template>
  <div class="teacher">
    <div class="content">
      <div @click="addShiti">添加试题</div>
      <div @click="addTest">添加考试</div>
      <div @click="searchGrade">查询成绩</div>
      <div @click="studentInfo">学生信息</div>
      <div @click="outGrade">成绩导出</div>
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

  methods: {
    // 添加试题
    addShiti(){
        this.$emit("update:nowPage", "addShiti");
      this.$emit("update:nav", "添加试题");
    },
    // 添加考试
    addTest(){
        this.$emit("update:nowPage", "addTest");
      this.$emit("update:nav", "添加考试");
    },
    // 查询成绩
    searchGrade(){
        this.$emit("update:nowPage", "searchGrade");
      this.$emit("update:nav", "查询成绩");
    },
    // 学生信息
    studentInfo(){
        this.$emit("update:nowPage", "searchStudent");
      this.$emit("update:nav", "学生信息");
    },
    // 成绩导出
    outGrade(){
        this.$emit("update:nowPage", "outGrade");
      this.$emit("update:nav", "成绩导出");
    }
  },
};
</script>
<style scoped>
.teacher {
  width: 100%;
  height: 100%;
}
.teacher .content {
  margin: auto;
  margin-top: 20px;
  width: 660px;
  height: auto;
}
.teacher .content > div {
  float: left;
  margin: 10px 10px;
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
.teacher .content > div:hover {
  font-size: 22px;
}
.teacher .content > div:nth-child(1) {
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
}
.teacher .content > div:nth-child(2) {
  background-image: linear-gradient(to right, #d9afd9 0%, #97d9e1 100%);
}
.teacher .content > div:nth-child(3) {
  background-image: linear-gradient(to right, #9795f0 0%, #fbc8d4 100%);
}
.teacher .content > div:nth-child(4) {
  background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
}
.teacher .content > div:nth-child(5) {
  background-image: linear-gradient(to right, #5ee7df 0%, #b490ca 100%);
}
</style>