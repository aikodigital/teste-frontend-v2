
import { EquipmentState } from '~/interfaces/equipment-state.interface'
import { FilterOption } from '~/interfaces/filter-option.interface'
import { StatesState } from '~/interfaces/store-interfaces/states/states-state.interface'

export const state = (): StatesState => ({
  states: [] as EquipmentState[],
  stateOptions: [] as FilterOption[]
})
