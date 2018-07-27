<template>
  <div class="loading-wrapper" >
    <div :style="style" ref="loadingDOM"></div>
    <div v-if="txt">{{txt}}</div>
  </div>
</template>

<script>
  import lottie from 'lottie-web'
  import * as LoadingData from './loading-data.json'

  export default {
    name: 'Loading',
    props: {
      // loading 宽度，高度等比适配
      width: Number,
      // 加载文字
      txt: String
    },
    data () {
      return {
        style: {
          width: this.width ? `${this.width}px` : '50%',
          // maxWidth: '30%',
          overflow: 'hidden',
          margin: '0 auto'
        }
      }
    },
    mounted () {
      lottie.loadAnimation({
        container: this.$refs.loadingDOM,
        animationData: LoadingData.default,
        renderer: 'svg',
        loop: true,
        autoplay: true
      })
    }
  }
</script>

<style scoped>
  .loading-wrapper {
    position: relative;
    padding: 15px 0;
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%, -50%);*/
  }
</style>
