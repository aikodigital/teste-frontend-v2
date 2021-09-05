import { BaseModel } from './base.model'
import { HourlyEarnings } from './hourly-earnings.model'

export interface EquipmentModel extends BaseModel{
    name: string
    img: string
    hourlyEarnings: HourlyEarnings[]
}
