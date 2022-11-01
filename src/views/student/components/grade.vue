<template>
  <div class="grade">
    <div class="content">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column align="center" label="序号" type="index">
        </el-table-column>
        <el-table-column align="center" label="科目" prop="kemu">
        </el-table-column>
        <el-table-column align="center" label="成绩" prop="grade">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "StudentFix",

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          kemu: "王小虎",
          grade: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          kemu: "王小虎",
          grade: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          kemu: "王小虎",
          grade: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          kemu: "王小虎",
          grade: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      search: "",
    };
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.grade .content {
  padding: 20px;
  background: #fff;
}
</style>