<template>
  <div class="bg-product h-screen flex justify-center">
    <div id="product-section" class="grid grid-cols-1 lg:grid-cols-3">
      <div class="w-full flex flex-row mt-10 col-start-2 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-10">
        <div id="product-image-section" class="md:mt-20 flex flex-row justify-center lg:ml-0">
          <div>
            <nuxt-img
              alt="img"
              fit="cover"
              sizes="sm:50vw md:50vw lg:300px"
              :src="product.images[0]"
              title="img"
            />
          </div>
        </div>
        <div id="product-info-section" class="flex flex-col justify-evenly">
          <div class="flex flex-col h-full justify-center">
            <div class="font-bold text-2xl text-center">
              {{ product.name }}
            </div>
            <div class="flex flex-row justify-center">
              <div class="mt-4 mb-4 w-min bg-blue-500 text-white font-light text-xs py-1 px-4 rounded-full">
                {{ product.region }}
              </div>
            </div>
            <div class="font-light text-xl text-center">
              {{ product.description }}
            </div>
            <div class="font-light text-l text-center">
              {{ product.price }} {{ product.currency }}
            </div>
            <div class="font-light text-l text-center">
              Currently pre-order only!
            </div>
          </div>

          <nuxt-link
            to="/cart"
          >
            <button
              class="w-full h-50px bg-button hover:bg-yellow-500 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              @click="addToBasket"
            >
              Add to basket
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'Id',
  async asyncData ({ route, $fire, store }) {
    const uid = route.params.id
    try {
      const dbRef = $fire.database.ref('products/public')
      const snapshot = await dbRef.get()
      if (snapshot.exists()) {
        const products = snapshot.val()
        await store.dispatch('products/setProduct', products.filter(product => product.uid === uid))
      }
    } catch (e) {
      console.log('product doesnt exist!')
    }
  },
  computed: {
    product () {
      return this.$store.state.products.selectedProduct[0]
    }
  },
  methods: {
    addToBasket () {
      this.$store.dispatch('products/addBasket', this.product)
    }
  }
}

</script>

<style scoped>
#product-section {
  /*width: 800px;*/
}

</style>
