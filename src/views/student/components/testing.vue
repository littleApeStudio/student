<template>
  <div>
    <div class="title">
      <div>共计 {{ testArray.length }} 道题，当前已做答 {{ done }} 道题</div>
      <div>
        <el-button type="primary" icon="el-icon-check" :disabled="testArray.length != done" @click="submit">交卷
        </el-button>
      </div>
    </div>
    <div class="none"></div>
    <div class="tests" v-for="(item, index) in testArray" :key="index">
      <div class="timu">
        {{ index + 1 }}、{{ item.timu }}（{{ item.grade }}分）<span>（ {{ selects[index].selected }} ）</span>
      </div>
      <div class="select" @click="sa(index)">A、{{ item.A }}</div>
      <div class="select" @click="sb(index)">B、{{ item.B }}</div>
      <div class="select" @click="sc(index)">C、{{ item.C }}</div>
      <div class="select" @click="sd(index)">D、{{ item.D }}</div>
    </div>
  </div>
</template>
<script>
import { getTesting } from "@/api/student";
export default {
  name: "StudentTesting",
  props: ["testid"],
  data() {
    return {
      testArray: [],
      selects: [],
      done: 0,
    };
  },

  created() {
    this.getTesting(this.testid)
  },

  mounted() { },

  methods: {
    sa(e) {
      this.selects[e].selected = "A";
      var select = this.selects;
      var done = 0;
      for (var i = 0; i < select.length; i++) {
        if (
          select[i].selected == "A" ||
          select[i].selected == "B" ||
          select[i].selected == "C" ||
          select[i].selected == "D"
        ) {
          done++;
        }
      }
      this.done = done;
    },
    sb(e) {
      this.selects[e].selected = "B";
      var select = this.selects;
      var done = 0;
      for (var i = 0; i < select.length; i++) {
        if (
          select[i].selected == "A" ||
          select[i].selected == "B" ||
          select[i].selected == "C" ||
          select[i].selected == "D"
        ) {
          done++;
        }
      }
      this.done = done;
    },
    sc(e) {
      this.selects[e].selected = "C";
      var select = this.selects;
      var done = 0;
      for (var i = 0; i < select.length; i++) {
        if (
          select[i].selected == "A" ||
          select[i].selected == "B" ||
          select[i].selected == "C" ||
          select[i].selected == "D"
        ) {
          done++;
        }
      }
      this.done = done;
    },
    sd(e) {
      this.selects[e].selected = "D";
      var select = this.selects;
      var done = 0;
      for (var i = 0; i < select.length; i++) {
        if (
          select[i].selected == "A" ||
          select[i].selected == "B" ||
          select[i].selected == "C" ||
          select[i].selected == "D"
        ) {
          done++;
        }
      }
      this.done = done;
    },
    submit() {
      var select = this.selects;
      var grade = 0;
      for (var i = 0; i < select.length; i++) {
        if (select[i].xtrue == select[i].selected) {
          grade = Number(grade) + Number(select[i].grade);
        }
      }
      console.log(grade);
      this.$confirm("每门考试仅可作答一次，确定交卷吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            message: "你得了" + grade + "分"
          })
        })
        .catch(() => { });
    },
    getTesting(e) {
      var data = {
        st_id: e,
        a_id: JSON.parse(sessionStorage.getItem("s_token")).a_id,
      }
      getTesting(data).then((res) => {
        this.testArray = res.data;
        var a = this.testArray;
        for (var i = 0; i < a.length; i++) {
          var b = {
            selected: "",
            xtrue: a[i].xtrue,
            grade: a[i].grade,
          };
          this.selects.push(b);
        }
      });
    }
  },
};
</script>
<style scoped>
.title {
  position: fixed;
  top: 56px;
  left: 0;
  width: 100%;
  height: 56px;
  background: #fff;
  display: flex;
  border-bottom: 1px solid #eeeeee;
}

.title>div {
  padding: 0 20px;
  flex: 1;
  display: flex;
  color: #313131;
}

.title>div:nth-child(1) {
  flex: 1;
  justify-content: flex-start;
  height: 56px;
  line-height: 56px;
}

.title>div:nth-child(2) {
  margin-top: 8px;
  flex: 1;
  justify-content: flex-end;
  height: 40px;
}

.none {
  height: 56px;
}

.tests {
  padding: 10px 0;
  margin: auto;
  width: 80%;
  min-width: 600px;
  text-align: left;
  height: auto;
}

.tests .timu {
  padding: 10px;
  height: auto;
  width: 100%;
  font-size: 16px;
  color: #313131;
}

.tests .timu>span {
  padding: 0 10px;
  height: auto;
  width: auto;
  font-size: 25px;
  font-family: "楷体";
  color: #313131;
}

.tests .select {
  padding: 10px;
  height: auto;
  width: auto;
  font-size: 16px;
  color: #313131;
  cursor: pointer;
  user-select: none;
}

.tests .select:hover {
  color: #3a9efd;
}
</style>