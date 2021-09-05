<template>
  <div class="row">
    <div class="col-12 text-right">
      <select-filter filter-type="model" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SelectFilter from '~/components/atoms/select-filter/SelectFilter.vue'
export default Vue.extend({
  components: { SelectFilter }
})
</script>
