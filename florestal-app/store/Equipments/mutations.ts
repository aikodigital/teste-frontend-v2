import { MutationTree } from 'vuex/types/index'
import { LatLng, latLngBounds } from 'leaflet'
import { EquipmentsState } from '../../interfaces/store-interfaces/equipments/equipments-state.interface'
import { Equipment } from '~/interfaces/equipment.interface'
import { EquipmentModel } from '~/interfaces/equipment-model.interface'
import { EquipmentHistory } from '~/interfaces/store-interfaces/equipments/equipment-history.interface'
type State = ReturnType<() => EquipmentsState>
export default {
  SET_EQUIPMENT_MODELS (state: EquipmentsState, payload: EquipmentModel[]) {
    state.equipmentModels = payload
  },
  SET_MODEL_OPTIONS (state: EquipmentsState, payload: EquipmentModel[]) {
    state.modelOptions = payload.map((model) => {
      return {
        text: model.name,
        value: model.id
      }
    })
  },
  SET_EQUIPMENTS (state: EquipmentsState, payload: Equipment[]) {
    state.equipments = payload
  },
  SET_EQUIPMENT (state: EquipmentsState, payload: Equipment) {
    state.equipment = payload
  },
  SET_EQUIPMENT_ID (state: EquipmentsState, payload: string) {
    state.equipmentId = payload
  },
  SET_EQUIPMENTS_MAP_BOUNDS (state: EquipmentsState, payload: Equipment[]) {
    const latLng = payload.map((equipment: Equipment) => {
      return {
        lat: equipment.latestPosition.lat,
        lng: equipment.latestPosition.lon
      }as LatLng
    })
    state.equipmentsMapBounds = latLngBounds(latLng)
  },
  SET_EQUIPMENT_HISTORY (state: EquipmentsState, payload: EquipmentHistory) {
    state.equipmentHistory = payload
  },
  FILTER_EQUIPMENTS (state: EquipmentsState, payload: string) {
    if (payload === '') {
      state.isFiltered = false
      return
    }
    state.isFiltered = true
    state.filteredEquipments = state.equipments.filter(equipment => equipment.equipmentModelId === payload)
  }
}as MutationTree<State>
