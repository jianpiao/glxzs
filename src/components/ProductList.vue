<template>
  <ul>
    <li v-for="p in products">
      <img src="../assets/logo.png" alt="">
      <div>
          {{ p.title }} <br/>
          {{ p.price | currency }}
      </div>
      <br>
      <button
        :disabled="!p.inventory"
        @click="addToCart(p)">
        添加到购物车
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters({
    products: 'allProducts'
  }),
  methods: mapActions([
    'addToCart'
  ]),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
<style>
html, body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #2c3e50;
}

ul {
  line-height: 1.5em;
  padding-left: 1.5em;
}

ul > li {
    list-style-type: none;
    float: left;
}

a {
  color: #7f8c8d;
  text-decoration: none;
}

a:hover {
  color: #4fc08d;
}

</style>