<template>
    <div>
        <div class="my_table">
            <!-- 空表 -->
            <el-empty v-if="tableData.length == 0" description="暂无通知"></el-empty>
            <!-- 表格 -->
            <el-table v-else class="el-table" :data="
    tableData.filter(
        (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
    )
            ">
                <el-table-column align="center" label="序号" type="index">
                </el-table-column>
                <el-table-column align="center" label="通知内容" prop="text">
                </el-table-column>
                <el-table-column align="center" label="时间" prop="time">
                </el-table-column>
            </el-table>
            <!-- 表格 -->
        </div>
    </div>
</template>
  
<script>
import { getnotice } from "@/api/student"
export default {
    data() {
        return {
            // 表格数据
            tableData: [],
            search: "",
        };
    },
    created() {
        this.getnotice()
    },
    methods: {
        getnotice() {
            var data = {
                a_id: JSON.parse(sessionStorage.getItem("t_token")).a_id,
            };
            getnotice(data).then((res) => {
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