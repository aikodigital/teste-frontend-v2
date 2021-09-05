import { EquipmentState } from '~/interfaces/equipment-state.interface'

export interface EquipmentHistory{
    page: number,
    totalData: number,
    data: EquipmentState[]
}
