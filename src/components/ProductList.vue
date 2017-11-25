<template>
    <div class="pro">
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
    </div>
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
<style scoped>

ul {
  line-height: 1.5em;
  padding: 0;
  width: 100%;
}

ul > li {
    width: 33%;
    height: 200px;
    float: left;
    list-style-type: none;
}

img{
    width: 100px;
    height: 100px;
}

.pro{
    position: absolute;
    width: 100%;
    top: 300px;
    left: 0;
    text-align: center;
}
</style>