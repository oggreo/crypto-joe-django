<template>
  <transition-group
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    :css="false"
  >
    <div
      class="card font-white text-xl text-center"
      v-for="card in cards"
      :key="card.id"
    >
      {{ card.title }}
      <div class="text-2xl">
        🎁🧡☕
      </div>
    </div>
  </transition-group>
</template>

<script>

export default {
  name: 'PopupCards',
  data () {
    return {
      cards: [
        { title: 'PRE-ORDER NOW FOR 20% OFF!', id: 124 }
      ]
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.width = '0em'
    },
    enter (el, done) {
      this.$velocity(el,
        { opacity: 1, width: '12em', rotateZ: '3deg' },
        { duration: 0, easing: [70, 8], complete: done }
      )
    }
  }
}
</script>

<style scoped>
.card {
  font-weight: 800;
  color: white;
  height: 8em;
  width: 10em;
  border-radius: 5%;
  background-color: #2997fa;
  /*box-shadow: 0.08em 0.03em 0.4em #ababab;*/
  box-shadow: 5px 5px #a06559;
  padding-top: 2em;
  padding-right: 0.5em;
  margin-top: 15px;
}

</style>
