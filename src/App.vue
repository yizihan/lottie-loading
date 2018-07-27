<template>
  <div id="app">
    <button @click="btn1">Loading A</button>
    <button @click="btn2">Loading B</button>
    <!-- 50 代表loading对象的宽度 -->
    <!-- 在定义指令时，使用binding.arg接收参数(50) -->
    <div id="loading" v-loading:50="loading1"></div>
    <div v-loading:150="loading2"></div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      loading1: false,
      loading2: false
    }
  },
  methods: {
    btn1 () {
      this.loading1 = true
      setTimeout(() => {
        this.loading1 = false
      }, 3000)
    },
    btn2 () {
      this.loading2 = true
      setTimeout(() => {
        this.loading2 = false
      }, 3000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#loading {
  background: #fc0;
}
</style>
