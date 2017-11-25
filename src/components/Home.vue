<template>
  <div class="home">
    <header>
      <mu-appbar title="广理小助手" class="appbar">
      <mu-icon-button icon="menu" slot="left"  @click="toShopping"/>
      <mu-icon-button icon="search" slot="right"/>
      <mu-icon-button icon="expand_more" slot="right"/>
      </mu-appbar>
    </header>
    <div class="content">
      <div class="content-swiper">
        <mt-swipe  :auto="3000">
          <mt-swipe-item v-for="(image, index) in images" :key="index">
            <img :src="image.url" alt="300*200" width="100%" height="180">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="swiper-text">
        <mt-swipe :show-indicators="false" :auto="3000">
            <mt-swipe-item v-for="(text, index) in items" :key="index">
              <p>{{text.title}}</p>
            </mt-swipe-item>
          </mt-swipe>
      </div>
      <div class="content-map">
         <div class="map-bottom">
              <mu-tabs :value="activeTab" @change="handleTabChange">
                <mu-tab value="吃" title="吃"/>
                <mu-tab value="喝" title="喝"/>
                <mu-tab value="玩" title="玩"/>
                <mu-tab value="唱" title="唱"/>
                <mu-tab value="公交" title="公交"/>
              </mu-tabs>
              <div v-if="activeTab === '吃'"><div class="fipp">吃的啊啊</div></div>
              <div v-if="activeTab === '喝'"><p>喝</p></div>
              <div v-if="activeTab === '玩'"><p>喝</p></div>
              <div v-if="activeTab === '唱'"><p> 唱</p></div>
              <div v-if="activeTab === '公交'"><p>公交</p></div>
         </div>
      </div>
    </div>
    <footer>
      <mu-paper>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="home" title="首页" icon="home"/>
          <mu-bottom-nav-item value="school" title="校园" icon="school"/>
          <mu-bottom-nav-item value="shopping" title="购物" icon="shopping_cart"/>
          <mu-bottom-nav-item value="chat" title="消息" icon="chat"/>
        </mu-bottom-nav>
      </mu-paper>
    </footer>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui'
  export default{
    name: 'home',
    data () {
      return {
        images: [{url: require("../assets/1.png")},
                {url: require("../assets/2.png")},
                {url: require("../assets/3.png")},
                {url: require("../assets/31.png")}],
        items: [{title: 'aaaaa'},{title: 'bbbbbbb'},{title: 'cccccc'},{title: 'ddddddd'}],
        bottomNav: 'home',
        activeTab: '吃'
      }
    },
    methods: {
      toShopping () {
        this.$router.push('/shopping')
      },
      handleChange (val) {
        this.bottomNav = val
      },
      handleTabChange (val) {
        this.activeTab = val
      },
      handleActive () {
        
      }  
    }
  }

</script>

<style scoped>
  body,html{
    outline: none;
    margin:0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    z-index: 10;
    background-color: #fff;
    color: #322;
    line-height: 56px;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 1px;
    box-shadow: 0 0 2px #aaa , 0 0 6px #ddd;
  }

  .appbar{
    background-color: #fff;
    color: #222;
  }

  .content{
    position: absolute;
    width: 100%;
    height: calc(100% - 56px);
    top: 56px;
    left: 0;
    background-color: #eee;
  }

  .content-swiper{
    width: 100%;
    height: 180px;
  }

  .swiper-text{
    width: 100%;
    height: 30px;
    background-color: #fff;
    box-shadow: 0 0 1px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .1);
  }

  .swiper-text .mint-swipe-item > p{
    line-height: 30px;
    font-size: 1.1rem;
    color: #111;
    text-align: center;
    margin: 0;
  }

  .content-map{
    width: 95%;
    height: 340px;
    margin:8px 2.5%;
    background-color: #fff;
    box-shadow: 0 0 1px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .1);
  }

  .map-bottom{
    width: 100%;
    height: 40px;
  }

  .mu-tabs{
    background-color: #fff;
    color: #222;
  }

  .mu-tab-link{
    color: #222;
  }

  footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    z-index: 100;
  }

  .mu-buttom-item{
    color: rgba(0,0,0,.8);
  }

  .mu-bottom-item-active{
    color: rgba(0,0,0,1) !important;
  }

</style>

