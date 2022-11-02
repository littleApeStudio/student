<template>
  <div class="grade">
    <div class="content">
      <el-table :data="tableData" style="width: 100%">
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
import { getGrade } from '@/api/student';
export default {
  name: "StudentFix",

  data() {
    return {
      tableData: [],
    };
  },

  created() {
    this.getGrade()
  },

  mounted() { },

  methods: {
    getGrade() {
      this.$showLoading("查询中...");
      var data = {
        a_id: JSON.parse(sessionStorage.getItem("s_token")).a_id,
        s_id: JSON.parse(sessionStorage.getItem("s_token")).s_id,
        class: JSON.parse(sessionStorage.getItem("s_token")).class,
      };
      getGrade(data)
        .then((res) => {
          this.dialogFormVisible = false;
          this.$hideLoading();
          if (res.code == 200) {
            this.$message({
              message: "查询成功",
              type: "success",
            });
            this.tableData = res.data;
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
    }
  },
};
</script>
<style scoped>
.grade .content {
  padding: 20px;
  background: #fff;
}
</style>