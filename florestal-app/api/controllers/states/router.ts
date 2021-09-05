import { Router } from 'express'
import StatessController from '.'

const router = Router()
const statesController = new StatessController()

router.get('', statesController.all)

export default router
