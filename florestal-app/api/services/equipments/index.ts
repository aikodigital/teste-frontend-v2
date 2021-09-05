import positionsService from '../../services/positions'
import stateService from '../states'
import { EquipmentModel } from '~/api/models/equipment-model.model'
import { Equipment } from '~/api/models/equipment.model'

class EquipmentsService {
  equipments: Equipment[] = require('../../data/equipment.json')
  equipmentModel: EquipmentModel[] = require('../../data/equipmentModel.json')

  getEquipments () {
    return this.equipments.map((equipment: Equipment) => {
      return {
        ...equipment,
        ...this.getModelInfoById(equipment.equipmentModelId),
        latestPosition: positionsService.getLatestPosition(equipment.id),
        latestState: stateService.getLatestState(equipment.id)
      }
    })
  }

  getEquipmentById (equipmentId: string) {
    const equipments = this.getEquipments()
    return equipments.find(equipment => equipment.id === equipmentId)
  }

  getModels () {
    return this.equipmentModel
  }

  getModelInfoById (equipmentModelId: string) {
    const model = this.equipmentModel.find((model: EquipmentModel) => model.id === equipmentModelId)
    return {
      modelName: model?.name,
      image: model?.img
    }
  }
}
export default new EquipmentsService()
