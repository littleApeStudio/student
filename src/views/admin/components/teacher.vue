<template>
  <div>
    <div class="header">
      <div>
        <el-button type="primary" @click="addTeacher">添加教师</el-button>
      </div>
      <div>
        <el-input class="search" v-model="search" placeholder="输入教师姓名搜索" />
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
      title="添加教师信息"
      :visible.sync="dialogFormVisible"
      :modal-append-to-body="false"
      :append-to-body="false"
      width="400px"
      :center="true"
    >
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            autocomplete="off"
            placeholder="输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input
            v-model="form.username"
            autocomplete="off"
            placeholder="输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            v-model="form.password"
            autocomplete="off"
            placeholder="输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="学院" :label-width="formLabelWidth">
          <el-input
            v-model="form.collage"
            autocomplete="off"
            placeholder="输入学院"
          ></el-input>
        </el-form-item>
        <el-form-item label="专业" :label-width="formLabelWidth">
          <el-input
            v-model="form.zy"
            autocomplete="off"
            placeholder="输入专业"
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
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "张三",
          username: "123123",
          password: "123456",
          collage: "背景",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "张三",
          username: "123123",
          password: "123456",
          collage: "背景",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "张三",
          username: "123123",
          password: "123456",
          collage: "背景",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "张三",
          username: "123123",
          password: "123456",
          collage: "背景",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "张三",
          username: "123123",
          password: "123456",
          collage: "背景",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "张三",
          username: "123123",
          password: "123456",
          collage: "背景",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "张三",
          username: "123123",
          password: "123456",
          collage: "背景",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
        {
          name: "王小虎",
          username: "123123",
          password: "123456",
          collage: "信息与工程学院",
          zy: "计算机科学与技术",
        },
      ],
      search: "",
      // 添加弹窗显隐
      dialogFormVisible: false,
      form: {
        name: "",
        username: "",
        password: "",
        collage: "",
        zy: "",
      },
      formLabelWidth: "60px",
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