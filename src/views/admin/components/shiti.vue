<template>
  <div>
    <div class="header">
      <div>
        <el-button type="primary" @click="addShiti">添加试题</el-button>
      </div>
      <div>
        <el-input class="search" v-model="search" placeholder="输入试题名搜索" />
      </div>
    </div>
    <div class="my_table">
      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" label="序号" type="index">
        </el-table-column>
        <el-table-column prop="name" label="试题名" align="center">
        </el-table-column>
        <el-table-column prop="kemu" label="科目" align="center">
        </el-table-column>
        <el-table-column prop="class" label="班级" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </div>
    <!-- 添加表单弹窗 -->
    <el-dialog title="添加试题" :visible.sync="dialogFormVisible" :modal-append-to-body="false" :append-to-body="false"
      width="400px" :center="true">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="输入试题名"></el-input>
        </el-form-item>

        <el-form-item label="班级" :label-width="formLabelWidth">
          <el-select v-model="form.class" placeholder="选择所在的班级">
            <el-option v-if="classs.length == 0" label="暂无班级，请前往学院管理添加" value=""></el-option>
            <el-option v-else v-for="(item, index) in classs" :key="index" :label="item.name" :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="科目" :label-width="formLabelWidth">
          <el-select width="100%" v-model="form.kemu" placeholder="选择考试科目">
            <el-option v-if="kemus.length == 0" label="暂无科目，请前往学院管理添加" value=""></el-option>
            <el-option v-else v-for="(item, index) in kemus" :key="index" :label="item.name" :value="item.name">
            </el-option>
          </el-select>
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
import {
  getKemu,
  getClass,
  addShiti,
  getShiti,
  delateShiti
} from "@/api/admin";
export default {
  data() {
    return {
      classs: [],
      kemus: [],
      // 表格数据
      tableData: [],
      search: "",
      // 添加弹窗显隐
      dialogFormVisible: false,
      form: {},
      formLabelWidth: "60px",
    };
  },
  created() {
    this.getShiti()
    this.getClass();
    this.getKemu();
  },
  methods: {
    // 添加
    addShiti() {
      this.dialogFormVisible = true;
    },
    // 确定
    sure() {
      var form = this.form;
      if (
        form.name.length < 2 ||
        form.kemu.length < 1 ||
        form.class.length < 1
      ) {
        this.$message({
          message: "表单格式错误",
          type: "warning",
        });
      } else {
        this.$showLoading("添加中...");
        var data = {
          name: form.name,
          kemu: form.kemu,
          class: form.class,
          a_id: sessionStorage.getItem("token"),
        };
        addShiti(data)
          .then((res) => {
            this.$hideLoading();
            if (res.code == 200) {
              this.$message({
                message: "添加成功",
                type: "success",
              });
              this.form = {
                name: "",
                username: "",
                password: "",
                collage: "",
                zy: "",
              };
              this.getShiti();
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
    handleDelete(row) {
      this.$confirm("此操作将永久删除该教师, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$showLoading("删除中...");
          var data = {
            st_id: row.st_id,
            tiankong: row.tiankong,
            xuanze: row.xuanze,
          };
          delateShiti(data)
            .then((res) => {
              this.$hideLoading();
              if (res.code == 200) {
                this.$message({
                  message: "删除成功",
                  type: "success",
                });
                this.getShiti();
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
        session: "admin",
      };
      getShiti(data).then((res) => {
        this.$hideLoading();
        this.tableData = res.data;
      });
    },
    // 查找班级信息
    getClass() {
      var data = {
        session: "admin",
      };
      getClass(data).then((res) => {
        this.$hideLoading();
        this.classs = res.data;
      });
    },
    // 查找科目信息
    getKemu() {
      var data = {
        session: "admin",
      };
      getKemu(data).then((res) => {
        this.$hideLoading();
        this.kemus = res.data;
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