<template>
  <div class="map" id="map">
  </div>
</template>

<script>
import leaflet from 'leaflet';
import { onMounted } from 'vue';

export default {
  name: 'MapComponent',
  setup() {
    let map;
    onMounted(() => {
      map = leaflet.map('map').setView([51.505, -0.09], 13);
      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap',
      }).addTo(map);
    });
  },
};
</script>

<style scoped>
  .map{
    width: 70%;
    height: 100%;
    border-radius: 0 15px 15px 0;
  }
</style>
