<template>
  <div class="student">
    <component :is="nowPage"></component>
  </div>
</template>
<script>
import index from "./components/index.vue";
import addTest from "./components/addTest.vue";
import outGrade from "./components/outGrade.vue";
import searchGrade from "./components/searchGrade.vue";
import searchStudent from "./components/searchStudent.vue";
export default {
  name: "Student",
  components: {
    index, //首页
    addTest, //添加试题
    outGrade, //到处成绩
    searchGrade, //查询成绩,
    searchStudent, //查询学生信息
  },
  data() {
    return {
      nowPage: "index",
    };
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
</style>