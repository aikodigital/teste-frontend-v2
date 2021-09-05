import { Request, Response } from 'express'
import equipmentsService from '../../services/equipments'
import statesService from '../../services/states'
import apiFunctions from '../../functions'

export default class EquipmentsController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  all (req: Request, res: Response) {
    const equipments = equipmentsService.getEquipments()
    res.json(equipments)
  }

  findOne (req: Request, res: Response) {
    const equipmentId = req.params.id
    res.json(equipmentsService.getEquipmentById(equipmentId))
  }

  getEquipmentHistory (req: Request, res: Response) {
    const page = (req.query.page) ? +req.query.page : 1
    const equipmentId = req.params.id
    const data = statesService.getStatesByEquipmentId(equipmentId)
    res.json(apiFunctions.paginate(data, 20, page))
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getEquipmentModels (req: Request, res: Response) {
    res.json(equipmentsService.getModels())
  }
}
