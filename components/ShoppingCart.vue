<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!--
    Slide-over panel, show/hide based on slide-over state.
    Entering: "transform transition ease-in-out duration-500 sm:duration-700"
      From: "translate-x-full"
      To: "translate-x-0"
    Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
      From: "translate-x-0"
      To: "translate-x-full"
  -->
  <div class="flex justify-center">
    <div class="w-7/8 lg:w-1/2">
      <div class="h-full flex flex-col bg-white shadow-xl">
        <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
          <div class="flex items-start justify-between">
            <h2 id="slide-over-title" class="text-lg font-medium text-gray-900">
              Shopping cart
            </h2>
          </div>

          <div class="mt-8">
            <div class="flow-root">
              <shopping-cart-list
                :products="products"
              />
            </div>
          </div>
        </div>

        <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>{{ subTotal }} BAT </p>
          </div>
          <p class="mt-0.5 text-sm text-gray-500">
            Currently pre-order only!
          </p>
          <div class="mt-6">
            <stripe-checkout
              ref="checkoutRef"
              mode="payment"
              :pk="publishableKey"
              :line-items="lineItems"
              :successful-url="successURL"
              :cancel-url="cancelURL"
            />
            <a
              class="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              href="#"
              @click="checkout"
            >Checkout</a>
          </div>
          <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
            <p>
              or

              <nuxt-link
                to="/"
              >
                <button
                  class="text-indigo-600 font-medium hover:text-indigo-500"
                  type="button"
                >
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </button>
              </nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCartList from './ShoppingCartList'

export default {
  name: 'ShoppingCart',
  components: { ShoppingCartList },
  beforeRouteLeave (to, next, from) {
    this.lineItems = []
    next()
  },
  data () {
    this.publishableKey = process.env.STRIPE_PK
    return {
      lineItems: [],
      successURL: 'http://localhost:3000/',
      cancelURL: 'http://localhost:3000/'
    }
  },
  computed: {
    products () {
      return this.$store.state.products.basket
    },
    subTotal () {
      let subTotal = 0
      this.products.forEach((x) => {
        subTotal += x.price
      })
      return subTotal.toFixed(2)
    }
  },
  methods: {
    checkout () {
      const priceIds = this.products.map(x => x.priceId)
      const quantity = {}
      for (const id of priceIds) {
        quantity[id] = quantity[id] ? quantity[id] + 1 : 1
      }
      for (const priceId of Object.keys(quantity)) {
        this.lineItems.push({
          price: priceId,
          quantity: quantity[priceId]
        })
      }
      this.$refs.checkoutRef.redirectToCheckout()
      this.$store.dispatch('products/clearBasket')
    }
  }
}
</script>

<style scoped>

</style>
