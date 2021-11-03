<template>
  <div
    class="coffee-card pt-4 bg-white justify-center items-center shadow px-6 py-4 flex flex-col"
    @click="setProduct"
  >
    <nuxt-link
      :to="'/products/' + product.uid"
      class="grid grid-cols-5 lg:grid-cols-1"
    >
      <!--      src="https://res.cloudinary.com/dk5s8ulry/image/upload/v1635792227/coffee_blend_sample_images.003_dsmnqh.png"-->
      <img
        alt="img"
        class="object-cover col-span-2 pt-2 pl-2 pr-2 my-auto"
        :src="product.images[0]"
        height="200"
        width="200"
        title="img"
      >
      <div class="col-start-4 col-span-2 lg:col-start-1 grid grid-cols-1 grid-rows-2">
        <div class="flex flex-col justify-center row-start-2">
          <button
            class="bg-green-700 hover:bg-green-900 text-white font-bold mt-8 py-2 px-4 h-10 lg:h-15 w-full rounded"
          >
            See more
          </button>
        </div>
        <div id="itemDescription">
          <div class="mt-8 text-center border-b-2">
            {{ product.name }}
          </div>
          <div class="mb-4 text-center text-sm capitalize">
            {{ product.region }}
          </div>
          <div class="flex justify-center">
            <div class="bg-blue-500 text-white font-light text-l py-1 px-4 rounded-full my-auto">
              {{ product.price }} {{ product.currency }}
            </div>
          </div>
        </div>
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
