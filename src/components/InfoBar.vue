<template>
  <aside  class="infobar">
    <section  class="infobar">
      <EquipmentComponent/>
    </section>
  </aside>
</template>

<script>
import EquipmentComponent from './InfoBar/EquipamentComponent.vue';

export default {
  name: 'InfoBar',
  components: {
    EquipmentComponent,
  },
};
</script>

<style scoped>
  .infobar{
    display: flex;
    flex:1;
    height: 100%;
    border-radius: 15px 0 0 15px;
    align-items: center;
  }
</style>
