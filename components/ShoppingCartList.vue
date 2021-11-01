<template>
  <ul class="-my-6 divide-y divide-gray-200" role="list">
    <li
      v-for="(product, $productIndex) in products"
      :key="$productIndex"
      class="py-6 flex"
    >
      <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <nuxt-img
          :alt="product.description"
          class="w-full h-full object-center object-cover"
          :src="product.images[0]"/>
      </div>

      <div class="ml-4 flex-1 flex flex-col">
        <div>
          <div class="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">
                {{ product.name }}
              </a>
            </h3>
            <p class="ml-4">
              {{ product.price }}
              {{ product.currency }}
            </p>
          </div>
          <p class="mt-1 text-sm text-gray-500">
            {{ product.region }}
          </p>
        </div>
        <div class="flex-1 flex items-end justify-between text-sm">
          <p class="text-gray-500">
            Qty 1
          </p>

          <div class="flex">
            <button
              @click="removeProduct($productIndex)"
              class="font-medium text-indigo-600 hover:text-indigo-500"
              type="button">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
    <!-- More products... -->
  </ul>

</template>

<script>
export default {
  name: 'ShoppingCartList',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeProduct (productIndex) {
      this.$store.dispatch('products/removeFromBasket', productIndex)
    }
  }
}
</script>

<style scoped>

</style>
