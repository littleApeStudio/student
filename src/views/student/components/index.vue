<template>
  <div class="student">
    <div class="content">
      <div @click="totest">参加考试</div>
      <div @click="tograde">查询成绩</div>
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
    // 修改
    fixed() {
      this.$emit("update:nowPage", "fix");
      this.$emit("update:nav", "修改信息");
    },
    // 参加考试
    totest(){
        this.$emit("update:nowPage", "test");
      this.$emit("update:nav", "参加考试");
    },
    // 查询成绩
    tograde(){
        this.$emit("update:nowPage", "grade");
      this.$emit("update:nav", "查询成绩");
    }
  },
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
  justify-content: center;
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
.student .content > div:hover {
  font-size: 22px;
}
.student .content > div:nth-child(1) {
  background-image: linear-gradient(to right, #9795f0 0%, #fbc8d4 100%);
}
.student .content > div:nth-child(2) {
  background-image: linear-gradient(to right, #5ee7df 0%, #b490ca 100%);
}
</style>