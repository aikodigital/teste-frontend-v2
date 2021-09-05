<template>
  <span :class="background? 'state state-with-background' : 'state'">
    <span :style="infoColor" class="info" />
    {{ latestState.name }}
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropOptions } from 'vue/types'
import { EquipmentState } from '~/interfaces/equipment-state.interface'
export default Vue.extend({
  props: {
    latestState: {
      type: Object,
      default: Object
    } as PropOptions<EquipmentState>,
    background: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      infoColor: {
        backgroundColor: this.latestState.color
      }
    }
  }

})
</script>

<style scoped lang="scss" src="./style.scss">
