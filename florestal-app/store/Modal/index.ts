import { ModalState } from '~/interfaces/store-interfaces/modal/modal-state.interface'

export const state = (): ModalState => ({
  modalComponent: null,
  modalTitle: ''
})
