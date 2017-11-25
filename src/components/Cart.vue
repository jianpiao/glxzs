<template>
  <div class="cart">
    <h2>你的购物车</h2>
    <p v-show="!products.length"><i>请添加你的商品</i></p>
    <ul>
      <li v-for="p in products">
        {{ p.title }} - {{ p.price | currency }} x {{ p.quantity }}
      </li>
    </ul>
    <p>总量: {{ total | currency }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">购买</button></p>
    <p v-show="checkoutStatus">购买 {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',//查看购物车全部内容
      checkoutStatus: 'checkoutStatus'//查看购买状态成功还是失败
    }),
    total () {
      return this.products.reduce((total, p) => {
        console.log(total+"||||||===========||||||"+p)
        return total + p.price * p.quantity
      }, 0)
    }
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('checkout', products)
    }
  }
}
</script>

<style scoped>
html, body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #2c3e50;
}

ul {
  line-height: 1.5em;
  padding: 0;
}

ul li {
    list-style-type: none;
}

.cart{
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0;
    text-align: center;
}
</style>
