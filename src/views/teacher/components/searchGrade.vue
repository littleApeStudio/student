<template>
  <div>
    <div class="header">
      <div>
        <el-button type="primary" icon="el-icon-download" @click="out"
          >导出</el-button
        >
      </div>
      <div>
        <el-input class="search" v-model="search" placeholder="输入姓名搜索" />
      </div>
    </div>
    <div class="my_table">
      <!-- 表格 -->
      <el-table
        id="table"
        class="el-table"
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
      >
        <el-table-column align="center" label="序号" type="index">
        </el-table-column>
        <el-table-column align="center" label="姓名" prop="name">
        </el-table-column>
        <el-table-column align="center" label="班级" prop="class">
        </el-table-column>
        <el-table-column align="center" label="科目" prop="kemu">
        </el-table-column>
        <el-table-column align="center" label="分数" prop="grades">
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </div>
  </div>
</template>

<script>
import FileSaver from "file-saver";
import { utils, write } from "xlsx";
export default {
  data() {
    return {
      // 表格数据
      tableData: [],
      search: "",
      formLabelWidth: "60px",
    };
  },
  methods: {
    // 导出成绩
    out() {
      //需给表格定义一个id或者类名
      let wb = utils.table_to_book(document.querySelector("#table"));
      let wbout = write(wb, { bookType: "xlsx", bookSST: true, type: "array" });
      try {
        FileSaver.saveAs(
          new Blob([wbout], { type: "application/octet-stream" }),
          "***.xlsx"
        ); //***是自己导出文件时的命名，随意
      } catch (e) {
        this.$message({
          message: "导出失败",
          type: "error",
        });
        if (typeof console !== "undefined") console.log(e, wbout);
      }
      return wbout;
    },
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
.header > div:nth-child(1) {
  margin-top: 8px;
  padding: 0 20px;
  width: 100px;
  height: 40px;
}
.header > div:nth-child(2) {
  margin-top: 8px;
  padding: 0 20px;
  flex: 1;
  height: 40px;
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