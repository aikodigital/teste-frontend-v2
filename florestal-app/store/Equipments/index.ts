import { LatLngBounds } from 'leaflet'
import { EquipmentsState } from '../../interfaces/store-interfaces/equipments/equipments-state.interface'
import { Equipment } from '~/interfaces/equipment.interface'
import { EquipmentHistory } from '~/interfaces/store-interfaces/equipments/equipment-history.interface'
import { EquipmentModel } from '~/api/models/equipment-model.model'
import { FilterOption } from '~/interfaces/filter-option.interface'

export const state = (): EquipmentsState => ({
  equipments: [] as Equipment[],
  filteredEquipments: [] as Equipment[],
  equipment: {} as Equipment,
  equipmentsMapBounds: {} as LatLngBounds,
  equipmentId: '',
  equipmentHistory: {} as EquipmentHistory,
  equipmentModels: [] as EquipmentModel[],
  modelOptions: [] as FilterOption[],
  isFiltered: false
})
