import { HourlyEarnings } from './hourly-earnings.interface'

export interface EquipmentModel{
    id: string
    name: string
    img: string
    hourlyEarnings: HourlyEarnings[]
}
