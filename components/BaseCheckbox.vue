<template>
  <div class="flex flex-row">
    <input
      type="checkbox"
      class="field mt-4 ml-2"
      :checked="value"
      @change="$emit('update:isChecked', $event.target.checked)"
    />
    <label
      v-if="label"
      class="mt-3 ml-2 break-words text-left font-light text-sm"
    > {{ label }} </label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
