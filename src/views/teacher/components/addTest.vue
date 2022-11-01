<template>
  <div>
    <div class="header">
      <div>
        <el-button type="primary" @click="addKemu">添加考试</el-button>
      </div>
      <div>
        <el-input class="search" v-model="search" placeholder="输入试题名搜索" />
      </div>
    </div>
    <div class="my_table">
      <!-- 空表 -->
      <el-empty v-if="tableData.length == 0" description="暂无考试信息"></el-empty>
      <!-- 表格 -->
      <el-table v-else class="el-table" :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      ">
        <el-table-column align="center" label="序号" type="index">
        </el-table-column>
        <el-table-column align="center" label="科目名称" prop="name">
        </el-table-column>
        <el-table-column align="center" label="班级" prop="class">
        </el-table-column>
        <el-table-column align="center" label="开始日期" prop="stime">
        </el-table-column>
        <el-table-column align="center" label="结束日期" prop="etime">
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </div>
    <!-- 添加表单弹窗 -->
    <el-dialog title="添加考试" :visible.sync="dialogFormVisible" :modal-append-to-body="false" :append-to-body="false"
      width="400px" :center="true">
      <el-form :model="form">
        <el-form-item label="试题" :label-width="formLabelWidth">
          <el-select v-model="form.name" placeholder="选择试题">
            <el-option v-if="shitis.length == 0" label="暂无试题，请联系管理员或去添加" value=""></el-option>
            <el-option v-else v-for="(item, index) in shitis" :key="index" :label="item.name" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始日期" :label-width="formLabelWidth">
          <el-date-picker v-model="form.starttime" type="date" placeholder="选择开始日期" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期" :label-width="formLabelWidth">
          <el-date-picker v-model="form.endtime" type="date" placeholder="选择结束日期" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 添加表单弹窗 -->
  </div>
</template>

<script>
import { addTest, getTest, getShiti } from "@/api/teacher";
export default {
  data() {
    return {
      shitis: [],
      // 表格数据
      tableData: [],
      search: "",
      // 添加弹窗显隐
      dialogFormVisible: false,
      form: {},
      formLabelWidth: "80px",
    };
  },
  created() {
    this.getShiti();
    this.getTest();
  },
  methods: {
    // 添加
    addKemu() {
      this.dialogFormVisible = true;
    },
    // 确定
    sure() {
      var form = this.form;
      if (form.name.length < 1 || form.starttime.length < 1 || form.endtime.length < 1) {
        this.$message({
          message: "表单格式错误",
          type: "warning",
        });
      } else {
        this.$showLoading("添加中...");
        var data = {
          name: form.name.name,
          st_id: form.name.st_id,
          stime: form.starttime,
          etime: form.endtime,
          a_id: JSON.parse(sessionStorage.getItem("t_token")).a_id,
          t_id: JSON.parse(sessionStorage.getItem("t_token")).t_id,
          class: JSON.parse(sessionStorage.getItem("t_token")).class,
        };
        addTest(data)
          .then((res) => {
            this.dialogFormVisible = false;
            this.$hideLoading();
            if (res.code == 200) {
              this.$message({
                message: "添加成功",
                type: "success",
              });
              this.form = {
                name: "",
                class: "",
              };
              this.getTest();
              this.dialogFormVisible = false;
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
    // 取消
    cancle() {
      this.dialogFormVisible = false;
    },
    // 删除
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该科目, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$showLoading("删除中...");
          var data = {
            ke_id: row.ke_id,
            a_id: sessionStorage.getItem("a_token"),
          };
          delateKemu(data)
            .then((res) => {
              this.$hideLoading();
              if (res.code == 200) {
                this.$message({
                  message: "删除成功",
                  type: "success",
                });
                this.getKemu();
                this.dialogFormVisible = false;
              } else {
                this.$message({
                  message: res.msg,
                  type: "error",
                });
              }
            })
            .catch((res) => {
              this.$hideLoading();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 查找试题信息
    getShiti() {
      var data = {
        a_id: JSON.parse(sessionStorage.getItem("t_token")).a_id,
        kemu: JSON.parse(sessionStorage.getItem("t_token")).course,
        class: JSON.parse(sessionStorage.getItem("t_token")).class,
      };
      getShiti(data).then((res) => {
        this.$hideLoading();
        this.shitis = res.data;
      });
    },
    // 查找考试信息
    getTest() {
      var data = {
        a_id: JSON.parse(sessionStorage.getItem("t_token")).a_id,
        t_id: JSON.parse(sessionStorage.getItem("t_token")).t_id,
        class: JSON.parse(sessionStorage.getItem("t_token")).class,
      };
      getTest(data).then((res) => {
        this.$hideLoading();
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
  margin-left: 20px;
  margin-top: 8px;
  width: auto;
  height: 40px;
}

.header>div:nth-child(2) {
  margin-top: 8px;
  width: auto;
  height: 40px;
}

.header>div:nth-child(2) .search {
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