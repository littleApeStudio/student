<template>
  <div>
    <div class="header">
      <div>
        <el-button type="primary" @click="addTeacher">添加学生</el-button>
      </div>
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
        <el-table-column align="center" label="学院" prop="collage">
        </el-table-column>
        <el-table-column align="center" label="专业" prop="zy">
        </el-table-column>
        <el-table-column align="center" label="学号" prop="schoolID">
        </el-table-column>
        <el-table-column align="center" label="密码" prop="password">
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
    <el-dialog title="添加学生信息" :visible.sync="dialogFormVisible" :modal-append-to-body="false" :append-to-body="false"
      width="400px" :center="true">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-input v-model="form.sex" autocomplete="off" placeholder="输入性别"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off" placeholder="输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="班级" :label-width="formLabelWidth">
          <el-input v-model="form.class" autocomplete="off" placeholder="输入班级"></el-input>
        </el-form-item>
        <el-form-item label="专业" :label-width="formLabelWidth">
          <el-input v-model="form.zy" autocomplete="off" placeholder="输入专业"></el-input>
        </el-form-item>
        <el-form-item label="学院" :label-width="formLabelWidth">
          <el-input v-model="form.collage" autocomplete="off" placeholder="输入学院"></el-input>
        </el-form-item>
        <el-form-item label="学号" :label-width="formLabelWidth">
          <el-input v-model="form.schoolID" autocomplete="off" placeholder="输入学号(至少为6位)"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off" placeholder="输入密码(至少为6位)"></el-input>
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
import { addStudent, getStudent, delateStudent } from "@/api/admin"
export default {
  data() {
    return {
      // 表格数据
      tableData: [],
      search: "",
      // 添加弹窗显隐
      dialogFormVisible: false,
      form: {
        name: "",
        age: "",
        sex: "",
        class: "",
        zy: "",
        collage: "",
        schoolID: "",
        password: "",
      },
      formLabelWidth: "60px",
    };
  },
  created() {
    this.getStudent()
  },
  methods: {
    // 添加
    addTeacher() {
      this.dialogFormVisible = true;
    },
    // 确定
    sure() {
      var form = this.form
      if (form.name.length < 2 || form.sex.length < 1 || form.age.length < 1 || form.class.length < 2 || form.zy.length < 2 || form.collage.length < 2 || form.schoolID.length < 6 || form.password.length < 6) {
        this.$message({
          message: "表单格式错误",
          type: "warning"
        })
      } else {
        var data = {
          name: form.name,
          age: form.age,
          sex: form.sex,
          class: form.class,
          zy: form.zy,
          collage: form.collage,
          schoolID: form.schoolID,
          password: form.password,
          a_id: sessionStorage.getItem('token'),
        }
        addStudent(data).then((res) => {
          if (res.code == 200) {
            this.$message({
              message: "添加成功",
              type: "success"
            })
            this.form = {
              name: "",
              username: "",
              password: "",
              collage: "",
              zy: "",
            }
            this.getStudent()
            this.dialogFormVisible = false;
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            })
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    // 取消
    cancle() {
      this.dialogFormVisible = false;
    },
    // 删除
    handleDelete(index, row) {
      var data = {
        s_id: row.s_id
      }
      delateStudent(data).then((res) => {
        if (res.code == 200) {
          this.$message({
            message: "删除成功",
            type: "success"
          })
          this.getStudent()
          this.dialogFormVisible = false;
        } else {
          this.$message({
            message: res.msg,
            type: "error"
          })
        }
      })
    },
    // 查找学生信息
    getStudent() {
      var data = {
        session: 'admin'
      }
      getStudent(data).then((res) => {
        this.tableData = res.data
      })
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