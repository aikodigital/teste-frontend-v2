import { HistoryStates } from './history-states.model'

export interface EquipmentStateHistory{
    equipmentId: string,
    states: HistoryStates[]
}
