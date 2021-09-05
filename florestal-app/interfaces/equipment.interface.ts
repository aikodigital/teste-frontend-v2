import { LatestPosition } from './latest-position.interface'
import { EquipmentState } from './equipment-state.interface'

export interface Equipment{
    id: string,
    name: string,
    modelName: string,
    equipmentModelId: string,
    image: string,
    latestPosition: LatestPosition,
    latestState: EquipmentState
}
