import { Router } from 'express'
import EquipmentsController from './index'

const router = Router()
const equipmentsController = new EquipmentsController()

router.get('', equipmentsController.all)
router.get('/models', equipmentsController.getEquipmentModels)
router.get('/:id', equipmentsController.findOne)
router.get('/:id/history', equipmentsController.getEquipmentHistory)

export default router
