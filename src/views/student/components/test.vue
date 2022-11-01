<template>
  <div>
    <div class="header">
      <div>
        <el-input class="search" v-model="search" placeholder="输入科目搜索" />
      </div>
    </div>
    <div class="my_table">
      <!-- 空表 -->
      <el-empty v-if="tableData.length == 0" description="暂无考试信息"></el-empty>
      <!-- 表格 -->
      <el-table v-else class="el-table" :data="
        tableData.filter(
          (data) =>
            !search || data.kemu.toLowerCase().includes(search.toLowerCase())
        )
      ">
        <el-table-column align="center" label="序号" type="index">
        </el-table-column>
        <el-table-column align="center" label="科目名称" prop="name">
        </el-table-column>
        <el-table-column align="center" label="开始日期" prop="stime">
        </el-table-column>
        <el-table-column align="center" label="结束日期" prop="etime">
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button type="success" @click="start(scope.$index, scope.row)">开始考试</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </div>
  </div>
</template>

<script>
import { getTest } from "@/api/student";
export default {
  data() {
    return {
      // 表格数据
      tableData: [],
      search: "",
    };
  },
  created() {
    this.getTest();
  },
  methods: {
    // 开始考试
    start(index, row) {
      this.$emit('update:testid', row.st_id);
      this.$emit('update:nowPage', "testing");
      this.$emit("update:nav", "开始答题");
    },
    // 查找班级信息
    getTest() {
      var data = {
        a_id: JSON.parse(sessionStorage.getItem("s_token")).a_id,
        class: JSON.parse(sessionStorage.getItem("s_token")).class,
      };
      getTest(data).then((res) => {
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