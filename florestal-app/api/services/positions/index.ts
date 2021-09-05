import { EquipmentPositionHistory } from '~/api/models/equipment-position-history.model'
import { Position } from '~/api/models/position.model'

class PositionService {
  positionHistory: EquipmentPositionHistory[] = require('../../data/equipmentPositionHistory.json')
  getLatestPosition (equipmentId: string): Position | null {
    const equipment = this.positionHistory.find((equipment: EquipmentPositionHistory) => {
      return equipment.equipmentId === equipmentId
    })
    const latestPosition = equipment?.positions ? equipment.positions[equipment.positions.length - 1] : null
    return latestPosition
  }
}
export default new PositionService()
