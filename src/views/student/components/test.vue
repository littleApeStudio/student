<template>
  <div class="test">
    <div class="header">
      <el-page-header @back="goBack" content="参加考试"> </el-page-header>
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
.test {
  margin: auto;
  width: 100%;
  height: auto;
}
.test .header {
  padding: 0 20px;
  width: calc(100% - 40px);
  height: 56px;
  line-height: 56px;
  background: #fff;
}
.test .header .el-page-header {
  line-height: 56px;
}
</style>