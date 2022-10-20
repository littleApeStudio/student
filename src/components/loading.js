import loadingTem from "./loading.vue"

const loading = {
  install:(Vue)=>{
    let loadingVue = Vue.extend(loadingTem);
    let vm = new loadingVue(); 
    document.body.appendChild(vm.$mount().$el);
    Vue.prototype.$showLoading = (res)=>{
      vm.showloading = true;
      vm.title = res
    }
    Vue.prototype.$hideLoading = ()=>{
      vm.showloading = false;
    }
  }
}

export default loading;