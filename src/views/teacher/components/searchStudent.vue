<template>
  <div>
    <div class="header">
      <div>
        <el-input class="search" v-model="search" placeholder="输入学生姓名搜索" />
      </div>
    </div>
    <div class="my_table">
      <!-- 空表 -->
      <el-empty v-if="tableData.length == 0" description="暂无学生信息"></el-empty>
      <!-- 表格 -->
      <el-table v-else class="el-table" :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      ">
        <el-table-column align="center" label="序号" type="index">
        </el-table-column>
        <el-table-column align="center" label="姓名" prop="name">
        </el-table-column>
        <el-table-column align="center" label="年龄" prop="age">
        </el-table-column>
        <el-table-column align="center" label="性别" prop="sex">
        </el-table-column>
        <el-table-column align="center" label="班级" prop="class">
        </el-table-column>
        <el-table-column align="center" label="学号" prop="schoolID">
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </div>
  </div>
</template>

<script>
import { addStudent, getStudent, delateStudent, getClass } from "@/api/admin";
export default {
  data() {
    return {
      // 表格数据
      tableData: [{
        name: "张三",
        age: "20",
        sex: "男",
        class: "1",
        schoolID: "123",
      }],
      search: "",
    };
  },
  created() {
    // this.getStudent();
  },
  methods: {
    // 查找学生信息
    getStudent() {
      var data = {
        a_id: sessionStorage.getItem("a_token"),
      };
      getStudent(data).then((res) => {
        this.tableData = res.data;
      });
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

.header>div:nth-child(1) {
  padding: 0 20px;
  margin-top: 8px;
  width: 100%;
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