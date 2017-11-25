<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import loading from './loading/loading.vue'
export default {
  name: 'app',
  computed:mapGetters([
      'loading'
    ]),
    components: {
      loading
    }
}
</script>
