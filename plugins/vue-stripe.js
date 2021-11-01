import Vue from 'vue'
import { StripeCheckout } from '@vue-stripe/vue-stripe'

export default () => {
  if (process.client) {
    Vue.component('StripeCheckout', StripeCheckout)
  }
}
