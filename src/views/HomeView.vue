<template>
  <div class="login_box">
    <div class="login"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created(){
    
  }
}
</script>
<style scoped>
.login_box {
  width: 100%;
  height: 100%;
}

.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 450px;
  height: 600px;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid #eeeeee;
}
</style>
