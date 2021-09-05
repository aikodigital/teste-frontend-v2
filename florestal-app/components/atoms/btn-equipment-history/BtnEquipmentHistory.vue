<template>
  <b-button variant="outline-primary" size="sm" @click="openHistory(equipmentId)">
    Hist. do equipamento
  </b-button>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'
export default Vue.extend({
  props: {
    equipmentId: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapMutations('Modal', { openModal: 'SHOW_MODAL', setTitle: 'SET_MODAL_TITLE' }),
    ...mapMutations('Equipments', { setEquipmentId: 'SET_EQUIPMENT_ID' }),
    openHistory (id) {
      this.setEquipmentId(id)
      this.$bvModal.show('florestal-modal')
      this.setTitle('Histórico de Estados')
      this.openModal('EquipmentHistory')
    }
  }
})
</script>
