<template>
  <div class="bg-product h-screen flex-row justify-center">
    <div id="basket" class="pt-10 text-center">
      <shopping-cart/>
    </div>
<!--    <div class="flex flex-row justify-evenly">-->
<!--      <div id="notes">notes </div>-->
<!--      <div id="checkout"> check out</div>-->
    </div>
  </div>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart'
export default {
  name: 'cart',
  components: { ShoppingCart }
}
</script>

<style scoped>

</style>
