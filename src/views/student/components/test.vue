<template>
  <div>
    <div class="header">
      <div>
        <el-input
          class="search"
          v-model="search"
          placeholder="输入科目搜索"
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
              !search || data.kemu.toLowerCase().includes(search.toLowerCase())
          )
        "
      >
        <el-table-column align="center" label="序号" type="index">
        </el-table-column>
        <el-table-column align="center" label="科目名称" prop="kemu">
        </el-table-column>
        <el-table-column align="center" label="开始日期" prop="starttime">
        </el-table-column>
        <el-table-column align="center" label="结束日期" prop="endtime">
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              type="success"
              @click="start(scope.$index, scope.row)"
              >开始考试</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格 -->
    </div>
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
    start(index, row) {
      this.$emit('update:nowPage', "testing");
      this.$emit("update:nav", "开始答题");
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