<template>
  <div>
    <div id="map-wrap">
      <client-only>
        <l-map ref="map" :zoom="zoom">
          <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <l-marker
            v-for="equipment in equipments"
            :key="equipment.id"
            :lat-lng="[equipment.latestPosition.lat, equipment.latestPosition.lon]"
          >
            <l-icon :icon-size="iconSize" :icon-url="require(`~/assets/img/${equipment.image}`)" />
            <l-popup>
              <map-pop-up
                :equipment-info="equipment"
              />
            </l-popup>
          </l-marker>
          <l-control position="bottomright">
            <filter-panel />
          </l-control>
        </l-map>
      </client-only>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions, mapGetters } from 'vuex'
import MapPopUp from '~/components/molecules/map-popup/MapPopup.vue'
import FilterPanel from '~/components/molecules/filter-panel/FilterPanel.vue'

export default Vue.extend({
  components: {
    MapPopUp,
    FilterPanel
  },
  data () {
    return {
      zoom: 13,
      iconSize: [50, 50],
      iconUrl: require('~/assets/img/marker.png')
    }
  },
  async fetch () {
    await this.getAllEquipments()
    this.fitMapBounds(this.bounds)
  },
  computed: {
    ...mapState('Equipments', { isFiltered: 'isFiltered' }),
    ...mapState('Equipments', { bounds: 'equipmentsMapBounds' }),
    ...mapGetters('Equipments', { allEquipments: 'allEquipments', filteredEquipments: 'filteredEquipments' }),
    equipments: {
      get () {
        return this.isFiltered ? this.filteredEquipments : this.allEquipments
      }
    }
  },
  methods: {
    ...mapActions('Equipments', { getAllEquipments: 'getAllEquipments', getHistory: 'getHistory' }),
    fitMapBounds (bounds) {
      this.$refs.map?.mapObject.fitBounds(bounds)
    }
  }
})
</script>

<style scoped>
#map-wrap {
 width: 100%;
 height: 100vh;
}
</style>
