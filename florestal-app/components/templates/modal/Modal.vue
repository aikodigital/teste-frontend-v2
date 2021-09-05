<template>
  <b-modal id="florestal-modal" size="xl" scrollable hide-footer>
    <template #modal-title>
      {{ modalTitle }}
    </template>
    <component :is="component" />
  </b-modal>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  data () {
    return {
      component: null
    }
  },
  computed: {
    ...mapState('Modal', { modalComponent: 'modalComponent', modalTitle: 'modalTitle' })
  },
  watch: {
    modalComponent (componentName) {
      if (!componentName) { return }
      Vue.component(componentName, () => import(`~/components/molecules/modals-content/${componentName}`))
      this.component = componentName
    }
  }
})
</script>
