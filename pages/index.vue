<template>
  <!--
    This example requires Tailwind CSS v2.0+

    This example requires some changes to your config:

    ```
    // tailwind.config.js
    module.exports = {
      // ...
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ],
    }
    ```
  -->
  <div class="bg-mainbg">
    <div class="bg-yellow-400 flex justify-start">
      <nuxt-img
        src="https://res.cloudinary.com/dk5s8ulry/image/upload/v1635795816/byac_vnyh2f.png"
        width="300"
        class="mx-auto"
      />
    </div>
    <!--
    Mobile filter dialog

    Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    -->
    <div v-if="showFilterMobile" class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
      <!--
    Off-canvas menu overlay, show/hide based on off-canvas menu state.

    Entering: "transition-opacity ease-linear duration-300"
    From: "opacity-0"
    To: "opacity-100"
    Leaving: "transition-opacity ease-linear duration-300"
    From: "opacity-100"
    To: "opacity-0"
    -->
      <div v-if="showFilterMobile" class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />

      <!--
    Off-canvas menu, show/hide based on off-canvas menu state.

    Entering: "transition ease-in-out duration-300 transform"
    From: "translate-x-full"
    To: "translate-x-0"
    Leaving: "transition ease-in-out duration-300 transform"
    From: "translate-x-0"
    To: "translate-x-full"
    -->
      <div
        v-if="showFilterMobile"
        class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto"
      >
        <div class="px-4 flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-900">
            Filters
          </h2>
          <button
            type="button"
            class="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
            @click="showFilterMobile = false"
          >
            <span class="sr-only">Close menu</span>
            <!-- Heroicon name: outline/x -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Filters -->
        <form class="mt-4 border-t border-gray-200">
          <h3 class="sr-only">
            Categories
          </h3>
          <ul role="list" class="font-medium text-gray-900 px-2 py-3">
            <li>
              <a href="#" class="block px-2 py-3">
                Web3.0
              </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3">
                New coins
              </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3">
                Satoshi 4 life
              </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3">
                HODL
              </a>
            </li>

            <li>
              <a href="#" class="block px-2 py-3">
                MEME COINS
              </a>
            </li>
          </ul>
          <div class="border-t border-gray-200 px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
              <!-- Expand/collapse section button -->
              <button
                type="button"
                class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-mobile-0"
                aria-expanded="false"
                @click="showStyles = !showStyles"
              >
                <span class="font-medium text-gray-900">
                  Styles
                </span>
                <span class="ml-6 flex items-center">
                  <!--
    Expand icon, show/hide based on section open state.
    Heroicon name: solid/plus-sm
    -->
                  <svg
                    v-if="showStyles === false"
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                  <!--
    Collapse icon, show/hide based on section open state.

    Heroicon name: solid/minus-sm
    -->
                  <svg
                    v-if="showStyles"
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
            </h3>
            <!-- Filter section, show/hide based on section state. -->
            <div
              v-if="showStyles"
              id="filter-section-mobile-0"
              class="pt-6"
            >
              <div class="space-y-6">
                <div
                  v-for="(style, $styleIndex) in styles"
                  :key="$styleIndex"
                  class="flex items-center"
                >
                  <input
                    v-model="style.isChecked"
                    name="color[]"
                    :value="style.name"
                    type="checkbox"
                    class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  >
                  <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">
                    {{ style.name }}
                  </label>
                </div>

                <div class="flex items-center">
                  <input
                    id="filter-mobile-color-1"
                    name="color[]"
                    value="beige"
                    type="checkbox"
                    class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  >
                  <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">
                    Beige
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-200 px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
              <!-- Expand/collapse section button -->
              <button
                type="button"
                class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-mobile-0"
                aria-expanded="false"
                @click="showRegions = !showRegions"
              >
                <span class="font-medium text-gray-900">
                  Regions
                </span>
                <span class="ml-6 flex items-center">
                  <!--
    Expand icon, show/hide based on section open state.
    Heroicon name: solid/plus-sm
    -->
                  <svg
                    v-if="showRegions === false"
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                  <!--
    Collapse icon, show/hide based on section open state.

    Heroicon name: solid/minus-sm
    -->
                  <svg
                    v-if="showRegions"
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
            </h3>
            <!-- Filter section, show/hide based on section state. -->
            <div
              v-if="showRegions"
              class="pt-6"
            >
              <div class="space-y-6">
                <div
                  v-for="(region, $regionIndex) in regions"
                  :key="$regionIndex"
                  class="flex items-center"
                >
                  <input
                    v-model="region.isChecked"
                    name="color[]"
                    :value="region.name"
                    type="checkbox"
                    class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  >
                  <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">
                    {{ region.name }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-200 px-4 py-6">
            <h3 class="-mx-2 -my-3 flow-root">
              <!-- Expand/collapse section button -->
              <button
                type="button"
                class="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                aria-controls="filter-section-mobile-0"
                aria-expanded="false"
                @click="showThemes = !showThemes"
              >
                <span class="font-medium text-gray-900">
                  Themes
                </span>
                <span class="ml-6 flex items-center">
                  <!--
    Expand icon, show/hide based on section open state.
    Heroicon name: solid/plus-sm
    -->
                  <svg
                    v-if="showThemes === false"
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                  <!--
    Collapse icon, show/hide based on section open state.

    Heroicon name: solid/minus-sm
    -->
                  <svg
                    v-if="showThemes"
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                  </svg>
                </span>
              </button>
            </h3>
            <!-- Filter section, show/hide based on section state. -->
            <div
              v-if="showThemes"
              class="pt-6"
            >
              <div class="space-y-6">
                <div
                  v-for="(theme, $themeIndex) in themes"
                  :key="$themeIndex"
                  class="flex items-center"
                >
                  <input
                    v-model="theme.isChecked"
                    name="color[]"
                    :value="theme.name"
                    type="checkbox"
                    class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  >
                  <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">
                    {{ theme.name }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative z-10 flex items-baseline justify-between pt-8 pb-6 border-b border-gray-200">
        <div class="flex items-center">
          <button
            type="button"
            class="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
            @click="showFilterMobile = true"
          >
            <span class="sr-only">Filters</span>
            <!-- Heroicon name: solid/filter -->
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <section aria-labelledby="products-heading">
        <h2 id="products-heading" class="sr-only">
          Products
        </h2>
        <!--        <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">-->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 ">
          <!-- Filters -->
          <form class="hidden lg:block bg-white lg:pl-4 lg:pr-4 ">
            <h3 class="sr-only">
              Categories
            </h3>
            <ul role="list" class="text-sm font-medium text-gray-900 space-y-4 pt-6 pb-6 border-b border-gray-200">
              <li>
                <a href="#">
                  Web3.0
                </a>
              </li>

              <li>
                <a href="#">
                  New coins
                </a>
              </li>

              <li>
                <a href="#">
                  Satoshi 4 life
                </a>
              </li>

              <li>
                <a href="#">
                  HODL
                </a>
              </li>

              <li>
                <a href="#">
                  MEME COINS
                </a>
              </li>
            </ul>

            <div class="border-b border-gray-200 py-6">
              <h3 class="-my-3 flow-root">
                <!-- Expand/collapse section button -->
                <button
                  type="button"
                  class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                  aria-controls="filter-section-0"
                  aria-expanded="false"
                  @click="showStyles = !showStyles"
                >
                  <span class="font-medium text-gray-900">
                    Style
                  </span>
                  <span class="ml-6 flex items-center">
                    <!--
    Expand icon, show/hide based on section open state.

    Heroicon name: solid/plus-sm
    -->
                    <svg
                      v-if="showStyles === false"
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    <!--
    Collapse icon, show/hide based on section open state.

    Heroicon name: solid/minus-sm
    -->
                    <svg
                      v-if="showStyles"
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
              </h3>
              <!-- Filter section, show/hide based on section state. -->
              <div v-if="showStyles" id="filter-section-0" class="pt-6">
                <div class="space-y-4">
                  <div
                    v-for="(style, $styleIndex) in styles"
                    :key="$styleIndex"
                    class="flex items-center"
                  >
                    <input
                      v-model="style.isChecked"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    >
                    <label for="filter-color-0" class="ml-3 text-sm text-gray-600">
                      {{ style.name }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-b border-gray-200 py-6">
              <h3 class="-my-3 flow-root">
                <!-- Expand/collapse section button -->
                <button
                  type="button"
                  class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                  aria-controls="filter-section-0"
                  aria-expanded="false"
                  @click="showRegions = !showRegions"
                >
                  <span class="font-medium text-gray-900">
                    Regions
                  </span>
                  <span class="ml-6 flex items-center">
                    <!--
    Expand icon, show/hide based on section open state.

    Heroicon name: solid/plus-sm
    -->
                    <svg
                      v-if="showRegions === false"
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    <!--
    Collapse icon, show/hide based on section open state.

    Heroicon name: solid/minus-sm
    -->
                    <svg
                      v-if="showRegions"
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
              </h3>
              <!-- Filter section, show/hide based on section state. -->
              <div v-if="showRegions" class="pt-6">
                <div class="space-y-4">
                  <div
                    v-for="(region, $regionIndex) in regions"
                    :key="$regionIndex"
                    class="flex items-center"
                  >
                    <input
                      v-model="region.isChecked"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    >
                    <label for="filter-color-0" class="ml-3 text-sm text-gray-600">
                      {{ region.name }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-b border-gray-200 py-6">
              <h3 class="-my-3 flow-root">
                <!-- Expand/collapse section button -->
                <button
                  type="button"
                  class="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500"
                  aria-controls="filter-section-0"
                  aria-expanded="false"
                  @click="showThemes = !showThemes"
                >
                  <span class="font-medium text-gray-900">
                    Themes
                  </span>
                  <span class="ml-6 flex items-center">
                    <!--
    Expand icon, show/hide based on section open state.

    Heroicon name: solid/plus-sm
    -->
                    <svg
                      v-if="showThemes === false"
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    <!--
    Collapse icon, show/hide based on section open state.

    Heroicon name: solid/minus-sm
    -->
                    <svg
                      v-if="showThemes"
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
              </h3>
              <!-- Filter section, show/hide based on section state. -->
              <div v-if="showThemes" class="pt-6">
                <div class="space-y-4">
                  <div
                    v-for="(theme, $themeIndex) in themes"
                    :key="$themeIndex"
                    class="flex items-center"
                  >
                    <input
                      v-model="theme.isChecked"
                      name="color[]"
                      value="white"
                      type="checkbox"
                      class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    >
                    <label for="filter-color-0" class="ml-3 text-sm text-gray-600">
                      {{ theme.name }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <!-- Product grid -->
          <div class="lg:col-span-3 bg-mainbg">
            <!-- Replace with your content -->
            <search-bar
              :value.sync="query"
            />
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 mt-10">
              <ProductCard
                v-for="(product, $optionIndex) in products"
                :key="$optionIndex"
                :product="product"
                class="mb-10"
              />
              <div />
              <!--              <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full" />-->
            <!-- /End replace -->
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Index',
  components: { ProductCard, SearchBar },
  async asyncData ({ $fire }) {
    try {
      const dbRef = $fire.database.ref('products/public')
      const snapshot = await dbRef.get()
      if (snapshot.exists()) {
        const products = snapshot.val()
        const allProducts = snapshot.val()
        return { products, allProducts }
      }
    } catch (e) {
      console.log('product doesnt exist!')
      console.log(e)
    }
  },
  data () {
    return {
      showFilterMobile: true,
      showThemes: true,
      showRegions: true,
      showStyles: true,
      selection: null,
      query: '',
      themes: [
        {
          name: 'One to watch',
          isChecked: false
        },
        {
          name: 'Summer hits',
          isChecked: false
        },
        {
          name: 'Yorkshire',
          isChecked: false
        },
        {
          name: 'Belgium',
          isChecked: false
        },
        {
          name: 'Great Beer cities',
          isChecked: false
        }
      ],
      regions: [
        {
          name: 'UK',
          isChecked: false
        },
        {
          name: 'Europe',
          isChecked: false
        },
        {
          name: 'USA',
          isChecked: false
        },
        {
          name: 'Australia',
          isChecked: false
        },
        {
          name: 'Asia',
          isChecked: false
        }
      ],
      styles: [
        {
          name: 'Sweet',
          isChecked: false
        },
        {
          name: 'Bitter',
          isChecked: false
        },
        {
          name: 'Sour',
          isChecked: false
        },
        {
          name: 'Moon',
          isChecked: false
        }
      ]
    }
  },
  computed: {
    filteredProducts () {
      return this.allProducts.filter(x => x.name.includes(this.query))
    }
  },
  watch: {
    query () {
      this.filterProducts()
    },
    styles: {
      handler () {
        this.filterProducts()
      },
      deep: true
    },
    regions: {
      handler () {
        this.filterProducts()
      },
      deep: true
    },
    themes: {
      handler () {
        this.filterProducts()
      },
      deep: true
    }
  },
  methods: {
    filterByCriteria (criteriaArray, filteredProducts, query) {
      criteriaArray.forEach((element, index, array) => {
        if (element.isChecked) {
          filteredProducts = filteredProducts.filter(x => x[query] === element.name)
        }
      })
      return filteredProducts
    },
    async filterProducts () {
      let filteredProducts = this.allProducts
      if (this.query) {
        filteredProducts = filteredProducts.filter(x => x.name.includes(this.query))
      }
      const filteredProducts1 = await this.filterByCriteria(this.themes, filteredProducts, 'theme')
      const filteredProducts2 = await this.filterByCriteria(this.regions, filteredProducts1, 'region')
      const filteredProducts3 = await this.filterByCriteria(this.styles, filteredProducts2, 'style')
      this.products = filteredProducts3
    }
  }
}
</script>
