<template>
  <div class="bg-mainbg h-auto flex flex-col">
    <div class="bg-yellow-400 flex justify-start">
      <popup-cards />
      <div class="flex w-full justify-around">
        <nuxt-img
          src="https://res.cloudinary.com/dk5s8ulry/image/upload/v1635795816/byac_vnyh2f.png"
          width="300"
        ></nuxt-img>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="market-section mt-10 w-full">
        <div class="w-full flex flex-row">
          <div id='filter-bar' class="flex flex-col mr-5">
            <div class="bg-white flex flex-col justify-center pl-5 pr-5">
              <div class="mt-4 text-sm text-gray-600">
                Filter By
              </div>
              <div class="title text-xl font-black mt-4 mb-4">
                Style
              </div>
              <BaseCheckbox
                v-for="(style, $styleIndex) in styles"
                :key="$styleIndex"
                :is-checked.sync="style.isChecked"
                :label="style.name"
              />
              <div class="border-b border-gray-300 mt-8 mb-8"></div>
              <div class="title text-xl font-extrabold mb-4">
                Region
              </div>
              <BaseCheckbox
                v-for="(region, $regionIndex) in regions"
                :key="$regionIndex + 10"
                :is-checked.sync="region.isChecked"
                :label="region.name"
              >
              </BaseCheckbox>
              <div class="border-b border-gray-300 mt-8 mb-8"></div>
              <div class="title text-xl font-extrabold mb-4">
                Theme
              </div>
              <BaseCheckbox
                v-for="(theme, $themeIndex) in themes"
                :key="$themeIndex + 100"
                :is-checked.sync="theme.isChecked"
                :label="theme.name"
              >
              </BaseCheckbox>
              <div class="mt-8 mb-8"></div>
            </div>
          </div>
          <div id='card-section' class="w-3/4">
            <div class="w-full h-20">
              <search-bar
                :value.sync="query"
              />
            </div>
            <div class="w-full h-10 text-xl ml-8">
              Showing all {{ products.length }} coffees
            </div>
            <div class="w-full flex flex-row flex-wrap justify-evenly">
              <ProductCard
                v-for="(product, $optionIndex) in products"
                :key="$optionIndex"
                :product="product"
                class="mb-10"
              ></ProductCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import BaseCheckbox from '../components/BaseCheckbox'
import SearchBar from '../components/SearchBar'
import PopupCards from '../components/PopupCards'

export default {
  name: 'index',
  components: { PopupCards, ProductCard, SearchBar, BaseCheckbox },
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
  },
  computed: {
    filteredProducts () {
      return this.allProducts.filter(x => x.name.includes(this.query))
    }
  },
  data () {
    return {
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
  }
}
</script>

<style scoped>
.market-section {
  width: 1000px;
}

</style>
