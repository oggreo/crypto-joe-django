<template>
  <div
    class="coffee-card mr-5 pt-4 bg-white justify-center items-center shadow px-6 py-4 flex flex-col"
    @click="setProduct"
  >
    <nuxt-link
      :to="'/products/' + product.uid">
<!--      src="https://res.cloudinary.com/dk5s8ulry/image/upload/v1635792227/coffee_blend_sample_images.003_dsmnqh.png"-->
      <img
        alt="img"
        class="object-cover pt-2 pl-2 pr-2"
        :src="product.images[0]"
        height="200"
        width="200"
        title="img"
      >
      <div class="flex justify-center">
        <button
          class="bg-green-700 hover:bg-green-900 text-white font-bold mt-8 py-2 px-4 h-15 w-full rounded"
        >
          See more
        </button>
      </div>
      <div class="mt-8 text-center border-b-2">{{ product.name }}</div>
      <div class="mb-4 text-center text-sm capitalize"> {{ product.region }}</div>
      <div class="flex justify-center">
        <div class="bg-blue-500 text-white font-light text-l py-1 px-4 rounded-full"> {{ product.price }} {{ product.currency }}</div>
      </div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  methods: {
    async setProduct () {
      await this.$store.dispatch('products/setProduct', this.product)
    }
  }
}
</script>

<style scoped>

</style>
