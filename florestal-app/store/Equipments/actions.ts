import { ActionTree, Commit } from 'vuex/types/index'
import { EquipmentsState } from '../../interfaces/store-interfaces/equipments/equipments-state.interface'
type State = ReturnType<() => EquipmentsState>
export default {
  async getAllEquipmentModels ({ commit }: { commit: Commit }) {
    await this.$axios.$get('/api/equipments/models')
      .then((response) => {
        commit('SET_EQUIPMENT_MODELS', response)
        commit('SET_MODEL_OPTIONS', response)
      })
  },
  async getAllEquipments ({ commit }: { commit: Commit }) {
    await this.$axios.$get('/api/equipments')
      .then((response) => {
        commit('SET_EQUIPMENTS', response)
        commit('SET_EQUIPMENTS_MAP_BOUNDS', response)
      })
  },
  async getEquipmentById ({ commit }: { commit: Commit }, equipmentId: string) {
    await this.$axios.$get(`/api/equipments/${equipmentId}`)
      .then((response) => {
        commit('SET_EQUIPMENT', response)
      })
  },
  async getHistoryById ({ commit }: { commit: Commit }, { equipmentId, page }:{ equipmentId: string, page: number }) {
    await this.$axios.$get(`/api/equipments/${equipmentId}/history?page=${page}`)
      .then((response) => {
        commit('SET_EQUIPMENT_HISTORY', response)
      })
  }
}as ActionTree<State, State>
