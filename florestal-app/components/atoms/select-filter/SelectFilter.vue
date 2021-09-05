<template>
  <div>
    <b-form-group v-slot="{ ariaDescribedby }" :label="title">
      <b-form-radio-group
        :id="`btn-${filterType}`"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        :name="`radios-btn-${filterType}`"
        buttons
        @change="filter"
      />
    </b-form-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState, mapMutations } from 'vuex'
export default Vue.extend({
  props: {
    filterType: {
      type: String,
      default: 'model'
    }
  },
  data () {
    return {
      selected: '',
      options: [{ text: 'Todos', value: '' }],
      title: this.filterType === 'model' ? 'Modelo ' : 'Estado atual'
    }
  },
  async fetch () {
    let options = []
    if (this.filterType === 'model') {
      await this.getAllEquipmentModels()
      options = this.modelOptions
    } else {
      await this.getAllStates()
      options = this.stateOptions
    }
    this.options = this.options.concat(options)
  },
  computed: {
    ...mapState('Equipments', { modelOptions: 'modelOptions' }),
    ...mapState('States', { stateOptions: 'stateOptions' })
  },
  methods: {
    ...mapActions('Equipments', { getAllEquipments: 'getAllEquipments', getAllEquipmentModels: 'getAllEquipmentModels' }),
    ...mapActions('States', { getAllStates: 'getAllStates' }),
    ...mapMutations('Equipments', { filterEquipments: 'FILTER_EQUIPMENTS' }),
    async filter (checked: any) {
      await this.getAllEquipments()
      this.filterEquipments(checked)
    }
  }
})
</script>
