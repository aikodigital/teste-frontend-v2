<template>
  <div>
    <h3 class="text-center">
      {{ equipmentInfo.name }}
    </h3>
    <h4 class="text-center font-weight-bold">
      {{ equipmentInfo.modelName }}
    </h4>
    <state-info :latest-state="equipmentInfo.latestState" class="text-center" />
    <btn-equipment-history class="mt-2" :equipment-id="equipmentInfo.id" />
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import { PropOptions } from 'vue/types'
import { Equipment } from '~/interfaces/equipment.interface'
import StateInfo from '~/components/atoms/state-info/StateInfo.vue'
import BtnEquipmentHistory from '~/components/atoms/btn-equipment-history/BtnEquipmentHistory.vue'
export default Vue.extend({
  components: {
    StateInfo,
    BtnEquipmentHistory
  },
  props: {
    equipmentInfo: {
      type: Object,
      default: Object
    } as PropOptions<Equipment>
  },
  data () {
    return {
      infoColor: {
        backgroundColor: this.equipmentInfo.latestState.color
      }
    }
  },
  computed: {
    ...mapState('Equipments', { equipmentHistory: 'equipmentHistory' })
  },
  methods: {
    ...mapActions({ getHistory: 'Equipments/getHistory' })
  }

})
</script>

<style scoped lang="scss" src="./style.scss">
