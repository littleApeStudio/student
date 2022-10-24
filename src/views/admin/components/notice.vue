<template>
  <div>
    <div class="header">
      <div>
         <el-button type="primary" icon="el-icon-edit" @click="addTeacher" circle></el-button>
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
        <el-table-column align="center" label="序号" type="index" width="100px">
        </el-table-column>
        <el-table-column align="center" label="通知时间" prop="time" width="150px">
        </el-table-column>
        <el-table-column align="center" label="通知内容" prop="text">
        </el-table-column>
        <el-table-column align="center" label="操作" width="100px">
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
      title="编写通知"
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
      :append-to-body="false"
      width="400px"
      :center="true"
    >
      <el-form :model="form">
        <el-form-item label="通知内容" label-width="80px">
          <el-input
            v-model="form.text"
            autocomplete="off"
            placeholder="输入通知内容"
          ></el-input>
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
export default {
  data() {
    return {
      // 表格数据
      tableData: [
        {
          text: "王小虎",
          time: "2022-10-24 12:05:59",
        },
      ],
      search: "",
      // 添加弹窗显隐
      dialogFormVisible: false,
      form: {
        text: "",
      },
    };
  },
  methods: {
    // 添加
    addTeacher() {
      this.dialogFormVisible = true;
    },
    // 确定
    sure() {
      this.dialogFormVisible = false;
    },
    // 取消
    cancle() {
      this.dialogFormVisible = false;
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
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