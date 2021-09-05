<template>
  <div class="col-12 col-md-8 px-0">
    <map-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MapView from '~/components/molecules/map-view/MapView.vue'
export default Vue.extend({
  components: {
    MapView
  }
})
</script>

<style lang="scss" scoped>
  .select-filter{
    width: 100%;
    z-index: 1001;
    position: fixed;
  }
</style>
