<template>
  <div class="loading">
    <img width="64" height="64" src="./Spinner.gif" alt="">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '正在加载中...'
      }
    }
  }
</script>
<style scoped>
.loading{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 32%;
  left: 2%;
  text-align: center;
  z-index: 1000;
}
   
.desc{
  line-height: 20px;
  font-size: font-size-small;
  color: color-text-l;
}
      
</style>
 