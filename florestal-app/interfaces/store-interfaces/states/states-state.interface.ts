import { EquipmentState } from "~/interfaces/equipment-state.interface";
import { FilterOption } from "~/interfaces/filter-option.interface";

export interface StatesState{
    states: EquipmentState[]
    stateOptions: FilterOption[]
}
