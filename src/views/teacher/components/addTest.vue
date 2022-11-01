<template>
  <div>
    <div class="header">
      <div>
        <el-button type="primary" @click="addKemu">添加考试</el-button>
      </div>
      <div>
        <el-input
          class="search"
          v-model="search"
          placeholder="输入试题名搜索"
        />
      </div>
    </div>
    <div class="my_table">
      <!-- 空表 -->
      <el-empty
        v-if="tableData.length == 0"
        description="暂无考试信息"
      ></el-empty>
      <!-- 表格 -->
      <el-table
        v-else
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
        <el-table-column align="center" label="科目名称" prop="kemu">
        </el-table-column>
        <el-table-column align="center" label="班级" prop="class">
        </el-table-column>
        <el-table-column align="center" label="开始日期" prop="starttime">
        </el-table-column>
        <el-table-column align="center" label="结束日期" prop="endtime">
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </div>
    <!-- 添加表单弹窗 -->
    <el-dialog
      title="添加考试"
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
      :append-to-body="false"
      width="400px"
      :center="true"
    >
      <el-form :model="form">
        <el-form-item label="试题" :label-width="formLabelWidth">
          <el-select v-model="form.shitis" placeholder="选择试题">
            <el-option
              v-if="shitis.length == 0"
              label="暂无试题，请联系管理员或去添加"
              value=""
            ></el-option>
            <el-option
              v-else
              v-for="(item, index) in shitis"
              :key="index"
              :label="item.name"
              :value="item.name"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始日期" :label-width="formLabelWidth">
          <el-date-picker v-model="form.starttime" type="date" placeholder="选择开始日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期" :label-width="formLabelWidth">
          <el-date-picker v-model="form.endtime" type="date" placeholder="选择结束日期">
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
import { addKemu, getKemu, delateKemu, getClass } from "@/api/admin";
export default {
  data() {
    return {
      shitis: [],
      // 表格数据
      tableData: [
        {
          kemu: "科目名称",
          class: "1",
          starttime: "2022-10-05",
          endtime: "2022-10-06",
        },
      ],
      search: "",
      // 添加弹窗显隐
      dialogFormVisible: false,
      form: {},
      formLabelWidth: "80px",
    };
  },
  created() {
    // this.getKemu();
    // this.getClass();
  },
  methods: {
    // 添加
    addKemu() {
      this.dialogFormVisible = true;
    },
    // 确定
    sure() {
      var form = this.form;
      if (form.name.length < 1 || form.class.length < 1) {
        this.$message({
          message: "表单格式错误",
          type: "warning",
        });
      } else {
        this.$showLoading("添加中...");
        var data = {
          name: form.name,
          class: form.class,
          a_id: sessionStorage.getItem("a_token"),
        };
        addKemu(data)
          .then((res) => {
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
              this.getKemu();
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
    // 查找科目信息
    getKemu() {
      var data = {
        a_id: sessionStorage.getItem("a_token"),
      };
      getKemu(data).then((res) => {
        this.$hideLoading();
        this.tableData = res.data;
      });
    },
    // 查找班级信息
    getClass() {
      var data = {
        a_id: sessionStorage.getItem("a_token"),
      };
      getClass(data).then((res) => {
        this.$hideLoading();
        this.classs = res.data;
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

.header > div:nth-child(1) {
  margin-left: 20px;
  margin-top: 8px;
  width: auto;
  height: 40px;
}

.header > div:nth-child(2) {
  margin-top: 8px;
  width: auto;
  height: 40px;
}

.header > div:nth-child(2) .search {
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