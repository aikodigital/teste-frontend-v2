import { LatLngBounds } from 'leaflet'
import { EquipmentHistory } from './equipment-history.interface'
import { Equipment } from '~/interfaces/equipment.interface'
import { EquipmentModel } from '~/api/models/equipment-model.model'
import { FilterOption } from '~/interfaces/filter-option.interface'

export interface EquipmentsState{
    equipments: Equipment[],
    filteredEquipments: Equipment[],
    equipment: Equipment,
    equipmentsMapBounds: LatLngBounds,
    equipmentId: string,
    equipmentHistory: EquipmentHistory
    equipmentModels: EquipmentModel[],
    modelOptions: FilterOption[],
    isFiltered: Boolean
}
