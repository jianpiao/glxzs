<template>
  <div class="home">
    <header>
        <router-link to="/home" tag="span">
            购物车
        </router-link>
    </header>
    <cart></cart>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'
export default {
  name: 'home',
  components: { ProductList, Cart }
}
</script>

<style scoped>
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    text-align: center;
    background-color: #20c997;
    color: #fff;
    line-height: 50px;
    font-size: 1.5rem;
    letter-spacing: 1px;
    box-shadow: 0 1px 4px #aaa , 0 1px 6px #aed;
  }
</style>

