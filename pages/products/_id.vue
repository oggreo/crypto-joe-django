<template>
  <div class="bg-product h-screen flex justify-center">
    <div id="product-section">
      <div class="w-full flex flex-row mt-10">
        <div id="product-image-section w-50">
          <nuxt-img
            alt="img"
            fit="cover"
            sizes="sm:100vw md:50vw lg:300px"
            :src="product.images[0]"
            title="img"
            class="mr-20"
          >
          </nuxt-img>
        </div>
        <div id="product-info-section" class="flex flex-col justify-evenly w-1/2">
          <div class="flex flex-col h-full justify-evenly">
            <section>
              <div class="font-bold text-2xl"> {{ product.name }} </div>
              <div class="mt-4 w-min bg-blue-500 text-white font-light text-xs py-1 px-4 rounded-full"> {{ product.region }} </div>
            </section>
            <div class="font-light text-xl"> {{ product.description }} </div>
            <section>
              <div class="font-light text-l"> {{ product.price }} {{ product.currency }} </div>
              <div class="font-light text-l"> Currently pre-order only! </div>
            </section>
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
  name: 'id',
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
  width: 800px;
}

</style>
