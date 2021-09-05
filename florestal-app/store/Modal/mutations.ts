import { MutationTree } from 'vuex/types/index'
import { ModalState } from '~/interfaces/store-interfaces/modal/modal-state.interface'

type State = ReturnType<() => ModalState>
export default {
  SHOW_MODAL (state, payload) {
    state.modalComponent = payload
  },
  SET_MODAL_TITLE (state, payload) {
    state.modalTitle = payload
  }
}as MutationTree<State>
