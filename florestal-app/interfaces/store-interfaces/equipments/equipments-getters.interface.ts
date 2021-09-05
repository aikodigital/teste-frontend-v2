import { EquipmentsState } from './equipments-state.interface'
import { Equipment } from '~/interfaces/equipment.interface'

export interface EquipmentsGetters {
    allEquipments: (state: EquipmentsState) => Equipment[]
    filteredEquipments: (state: EquipmentsState) => Equipment[]
}
