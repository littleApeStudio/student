<template>
  <div class="grade">
    <div class="content">
      <el-input v-model="search" placeholder="输入关键字搜索" />
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <el-table-column align="center" label="序号" type="index">
        </el-table-column>
        <el-table-column align="center" label="姓名" prop="name">
        </el-table-column>
        <el-table-column align="center" label="班级" prop="class">
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
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
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