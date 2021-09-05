import { ActionTree, Commit } from 'vuex/types/index'
import { StatesState } from '~/interfaces/store-interfaces/states/states-state.interface'
type State = ReturnType<() => StatesState>
export default {
  async getAllStates ({ commit }: { commit: Commit }) {
    await this.$axios.$get('/api/states')
      .then((response) => {
        commit('SET_STATES', response)
        commit('SET_STATE_OPTIONS', response)
      })
  }
}as ActionTree<State, State>
