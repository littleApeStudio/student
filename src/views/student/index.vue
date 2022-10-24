<template>
  <div class="student">
    <component :is="nowPage" :nowPage.sync="nowPage"></component>
  </div>
</template>
<script>
import index from "./components/index.vue";
import fix from "./components/fix.vue";
import test from "./components/test.vue";
import grade from "./components/grade.vue";
export default {
  name: "StudentLogin",
  components: {
    index,
    fix,
    test,
    grade
  },
  data() {
    return {
      nowPage: "index",
    };
  },

  mounted() {},

  methods: {
    
  },
};
</script>
<style scoped>
</style>
<style>
body {
  background: #eeeeee;
}
</style>