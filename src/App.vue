<template>
  <div id="app">
    <h3>welocme vuex-demo</h3>
    <input type="button" name="" value="增加" @click="increment">
    <input type="button" name="" value="减少" @click="decrement">
    <input type="button" name="" value="偶数点击+" @click="clickOdd">
    <input type="button" name="" value="点击异步+" @click="clickAsync">
    <div>
      现在数字为： {{count}} ,他现在是 {{getOdd}}
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default{
  computed:mapGetters([
    'count',
    'getOdd'
  ]),
  methods:mapActions([
      'clickOdd',
      'increment',
      'decrement',
      'clickAsync'
  ])
}
</script>

<style>

</style>
