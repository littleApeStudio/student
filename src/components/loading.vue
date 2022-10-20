<template>
  <transition name="loading">
    <div class="module_loading" v-show="showloading">
      <div class="loading">
        <span class="iconfont">&#xe7ba;</span>
      </div>
      <div class="text">{{ title }}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Loading",
  props: {
    showloading: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "加载中...",
    }
  },
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("./loading.ttf?t=1665371660634") format("truetype");
}

.loading-enter-active {
  animation: tipdialog-in 0.4s both;
}

.loading-leave-active {
  animation: tipdialog-in 0.4s reverse;
}

@keyframes tipdialog-in {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

.module_loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.module_loading .loading {
  position: fixed;
  top: calc(50% - 1rem);
  left: calc(50% - 1rem);
  z-index: 10000;
  width: 2rem;
  height: 2rem;
  animation: loadinga 1.6s linear infinite;
  -webkit-animation: loadinga linear 1.6s infinite;
}

@keyframes loadinga {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loadinga {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.module_loading .loading .iconfont {
  font-family: "iconfont" !important;
  font-size: 2rem;
  font-style: 100;
  color: #ffffff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.module_loading .text {
  position: fixed;
  top: calc(50% + 1rem);
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  font-size: 0.8rem;
  color: #ffffff;
}
</style>
