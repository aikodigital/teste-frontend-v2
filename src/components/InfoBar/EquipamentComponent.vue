<template>
  <section class="infobar__dados">
    <div class="dados-container">
      <h2>Nome equipamento</h2>
      <hr>
      <div class="list-info">
        <p v-for = "(name, index) in equipment" :key="index">{{name.name}}</p>
      </div>
    </div>
    <div class="dados-container">
      <h3>Modelo do equipamento</h3>
      <hr>
      <div class="list-info">
        <p v-for = "(name, index) in model" :key="index">{{name.name}}</p>
      </div>
    </div>
    <div class="dados-container">
      <h3>Estado do equipamento</h3>
      <hr>
      <div class="list-info">
        <p v-for = "(name, index) in state" :key="index">{{name.name}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EquipamentComponent',
  data() {
    return {
      model: null,
      equipment: null,
      state: null,
    };
  },
  methods: {
    async getModels() {
      // retorno dos dados de equipmentModel.json
      const reqModel = await fetch('http://localhost:3000/model');
      const dataModel = await reqModel.json();
      this.model = dataModel;
      // retorno dos dados de equipment.json
      const reqEquipment = await fetch('http://localhost:3000/equipment');
      const dataEquipment = await reqEquipment.json();
      this.equipment = dataEquipment;
      // retorno dos dados de equipmentSate.json
      const reqState = await fetch('http://localhost:3000/state');
      const dataState = await reqState.json();
      this.state = dataState;
    },
  },
  mounted() {
    this.getModels();
  },
};
</script>

<style scoped>
  .dados-container{
    height:25%;
  }
  .list-info{
    height: 62%;
    overflow-y: scroll;
  }
</style>
