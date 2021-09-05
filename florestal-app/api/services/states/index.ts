import { EquipmentStateHistory } from '~/api/models/equipment-state-history.model'
import { EquipmentState } from '~/api/models/equipment-state.model'
import { HistoryStates } from '~/api/models/history-states.model'

class StatesService {
    states: EquipmentState[] = require('../../data/equipmentState.json')
    stateHistory: EquipmentStateHistory[] = require('../../data/equipmentStateHistory.json')

    getLatestState (equipmentId: string): Object {
      const states = this.getStatesByEquipmentId(equipmentId)
      const latestState = states ? states[0] : {}
      return latestState
    }

    getStatesByEquipmentId (equipmentId: string): Object[] {
      const equipment = this.stateHistory.find((equipment: EquipmentStateHistory) => equipment.equipmentId === equipmentId)
      const statesOrdered = equipment?.states.sort((a, b) => {
        const aDate: number = new Date(a.date).getTime()
        const bDate: number = new Date(b.date).getTime()
        return bDate > aDate ? 1 : -1
      })
      let stateHistoryEquipment: Object[] = []
      if (statesOrdered) {
        stateHistoryEquipment = statesOrdered.map((state: HistoryStates) => {
          return {
            ...this.getGlobalStateById(state.equipmentStateId),
            date: state.date
          }
        })
      }
      return stateHistoryEquipment
    }

    getGlobalStates () : Object {
      return this.states
    }

    getGlobalStateById (stateId: string) : Object {
      const equipmentState = this.states.find((state: EquipmentState) => state.id === stateId)
      return equipmentState || {}
    }
}
export default new StatesService()
