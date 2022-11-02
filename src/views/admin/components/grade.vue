<template>
  <div>
    <div class="header">
      <div>
        <el-input class="search" v-model="search" placeholder="输入姓名搜索" />
      </div>
    </div>
    <div class="my_table">
      <!-- 表格 -->
      <el-table class="el-table" :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      ">
        <el-table-column align="center" label="序号" type="index">
        </el-table-column>
        <el-table-column align="center" label="姓名" prop="name">
        </el-table-column>
        <el-table-column align="center" label="班级" prop="class">
        </el-table-column>
        <el-table-column align="center" label="科目" prop="kemu">
        </el-table-column>
        <el-table-column align="center" label="分数" prop="grade">
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </div>
  </div>
</template>

<script>
import { getGrade } from '@/api/admin';
export default {
  data() {
    return {
      // 表格数据
      tableData: [],
      search: "",
      formLabelWidth: "60px",
    };
  },

  created() {
    this.getGrade()
  },
  methods: {
    getGrade() {
      this.$showLoading("查询中...");
      var data = {
        a_id: JSON.parse(sessionStorage.getItem("a_token")),
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
.header {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 56px;
  background: #fff;
  border-bottom: solid 1px #e6e6e6;
  display: flex;
}

.header>div:nth-child(1) {
  margin-top: 8px;
  width: auto;
  height: 40px;
}

.header>div:nth-child(1) .search {
  margin-left: 20px;
  width: 200px;
  height: 100%;
}

.my_table {
  position: relative;
  top: 56px;
  width: 100%;
}

.my_table .el-table {
  position: absolute;
  width: 100%;
}
</style>