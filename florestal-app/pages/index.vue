<template>
  <div class="container-fluid">
    <div class="row">
      <header-app />
      <map-interactor />
    </div>
    <modal />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderApp from '~/components/molecules/header-app/HeaderApp.vue'
import MapInteractor from '~/components/organisms/map-interactor/MapInteractor.vue'
import Modal from '~/components/templates/modal/Modal.vue'
export default Vue.extend({
  components: {
    HeaderApp,
    MapInteractor,
    Modal
  }
})
</script>
