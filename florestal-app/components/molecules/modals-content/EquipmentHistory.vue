<template>
  <div>
    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <div class="text-center">
          <b-spinner variant="primary" type="grow" label="Spinning" />
        </div>
      </template>
      <div>
        <b-card :title="equipment.name" :sub-title="'Modelo: '+equipment.modelName" class="mb-3">
          <b-card-text>
            Estado atual: <state-info :latest-state="equipment.latestState" :background="false" />
          </b-card-text>
        </b-card>
        <b-list-group>
          <b-list-group-item v-for="(state, key) in equipmentHistory.data" :key="key" class="d-flex justify-content-between align-items-center">
            <state-info :latest-state="state" :background="false" />
            <b-badge pill variant="secondary">
              {{ formatDate(state.date) }}
            </b-badge>
          </b-list-group-item>
        </b-list-group>
        <div class="mt-3">
          <b-pagination
            v-model="equipmentHistory.page"
            pills
            :total-rows="equipmentHistory.totalData"
            :per-page="equipmentHistory.length"
            align="center"
            @change="getPage"
          />
        </div>
      </div>
    </b-skeleton-wrapper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import StateInfo from '~/components/atoms/state-info/StateInfo.vue'
export default Vue.extend({
  components: { StateInfo },
  data () {
    return {
      loading: true
    }
  },
  async fetch () {
    await this.getPage(1)
  },
  computed: {
    ...mapState('Equipments', { equipmentHistory: 'equipmentHistory', equipmentId: 'equipmentId', equipment: 'equipment' })
  },
  methods: {
    ...mapActions('Equipments', { getHistoryById: 'getHistoryById', getEquipmentById: 'getEquipmentById' }),
    formatDate (date: string) {
      const dateObject = new Date(date)
      const dateFormated = dateObject.toLocaleDateString()
      const hours = dateObject.getUTCHours()
      const minutes = dateObject.getUTCMinutes()
      const timeFormated = `${this.leadingZeros(hours)}:${this.leadingZeros(minutes)}`
      return `${dateFormated} - ${timeFormated}`
    },
    leadingZeros (time: number) {
      const pad = (number: number) => number < 10 ? '0' + number : number
      return pad(time)
    },
    async getPage (pageNumber: number) {
      this.loading = true
      const params = { equipmentId: this.equipmentId, page: pageNumber }
      await this.getHistoryById(params)
      await this.getEquipmentById(this.equipmentId)
      this.loading = false
    }
  }
})
</script>

<style scoped lang="scss" src="./style.scss">
