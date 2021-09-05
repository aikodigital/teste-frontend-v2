import { Request, Response } from 'express'
import statesService from '../../services/states'

export default class StatessController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  all (req: Request, res: Response) {
    const states = statesService.getGlobalStates()
    res.json(states)
  }
}
