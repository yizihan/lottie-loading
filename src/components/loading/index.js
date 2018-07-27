import LoadingComponent from './Loading.vue'

// Loading 插件
const Loading = {
  // install() 插件必须有的方法，第一个参数是 Vue 构造器
  install: (Vue, initOptions = {}) => {
    // 添加全局指令
    Vue.directive('loading', {
      // bind() 钩子函数，指令第一次绑定到元素时调用
      // el 指令绑定的元素
      // binding 一个对象，指令的绑定值
      bind (el, binding) {
        let position = window.getComputedStyle(el).position
        if (position === 'static' || position === '') {
          el.style.position = 'relative'
        }
        // Vue.extend() 将Loading模板扩展成一个子类
        // 实例化子类并挂载
        // 拆分
        // let Constructor = Vue.extend(LoadingComponent)
        // let loading = new Constructor({
        //   propsData: {
        //     width: 100
        //   }
        // }).$mount()
        let loading = new (Vue.extend(LoadingComponent))({
          // v-loading:50 => binding.arg
          propsData: {width: Number(binding.arg)}
        }).$mount()
        // loading.$el.style.cssText = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'
        // 是否初始化我显示状态
        if (binding.value) {
          el.appendChild(loading.$el)
        }
        binding.def.loadingBox = loading
      //  两个指令同时使用时，后者会覆盖前者
      },
      // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
      // 即异步请求数据完成之后，改变指令绑定值
      update (el, binding) {
        if (binding.oldValue !== binding.value) {
          if (binding.value) {
            el.appendChild(binding.def.loadingBox.$el)
            binding.oldValue = true
          } else {
            el.removeChild(binding.def.loadingBox.$el)
          }
        }
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Loading = Loading
}

export default Loading