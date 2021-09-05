import { MutationTree } from 'vuex/types/index'
import { EquipmentState } from '~/interfaces/equipment-state.interface'
import { StatesState } from '~/interfaces/store-interfaces/states/states-state.interface'
type State = ReturnType<() => StatesState>
export default {
  SET_STATES (state: StatesState, payload: EquipmentState[]) {
    state.states = payload
  },
  SET_STATE_OPTIONS (state: StatesState, payload: EquipmentState[]) {
    state.stateOptions = payload.map((state) => {
      return {
        text: state.name,
        value: state.id
      }
    })
  }
}as MutationTree<State>
