import { EquipmentsGetters } from '../../interfaces/store-interfaces/equipments/equipments-getters.interface'

export default {
  allEquipments: state => state.equipments,
  filteredEquipments: state => state.filteredEquipments
}as EquipmentsGetters
