<template>
  <div>
    <div class="header">
      <div>
        <el-input class="search" v-model="search" placeholder="输入姓名搜索" />
      </div>
    </div>
    <div class="my_table">
      <!-- 表格 -->
      <el-table
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
        <el-table-column align="center" label="用户名" prop="username">
        </el-table-column>
        <el-table-column align="center" label="密码" prop="password">
        </el-table-column>
        <el-table-column align="center" label="学院" prop="collage">
        </el-table-column>
        <el-table-column align="center" label="专业" prop="zy">
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表格数据
      tableData: [
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
      ],
      search: "",
      formLabelWidth: "60px",
    };
  },
  methods: {
    
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
  width: auto;
  height: 40px;
}
.header > div:nth-child(1) .search {
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