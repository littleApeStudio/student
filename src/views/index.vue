<template>
  <div></div>
</template>
<script>
export default {
  name: "StudentIndex",

  data() {
    return {};
  },

  created() {
    var s_token = sessionStorage.getItem("s_token");
    var t_token = sessionStorage.getItem("t_token");
    if (s_token != null) {
    } else if (t_token != null) {
    } else {
      this.$message({
        message: "你还没有登录哦",
        type: "warning",
      });
      this.$router.push("/login");
    }
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
</style>