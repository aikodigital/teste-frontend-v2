<template>
  <section class="infobar">
    <div v-show="mostrar_infobar" class="infobar__dados">
      <div>
        <h2>Nome equipamento</h2>
        <p>Modelo do equipamento</p>
        <hr>
      </div>
      <div>
        <h3>Posição atual</h3>
        <hr>
        <button>Histórico de posiçoes</button>
      </div>
      <div>
        <h3>Estado do equipamento</h3>
        <hr>
        <button>Histórico de estados</button>
      </div>
    </div>
    <div class="box-open-infobar">
      <button @click="AbreInfobar"
      class="box-open-infobar__button"
      alt="Botão de abertura e fechamento da aba de informações dos equipamentos">
        <img src="../assets/img/seta-lado-direito.svg" class="image-arrow"/>
      </button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'InfoBarComponent',
  data() {
    return {
      mostrar_infobar: 'Boolean',
    };
  },
  methods: {
    AbreInfobar() {
      this.mostrar_infobar = !this.mostrar_infobar;
    },
  },
};
</script>

<style scoped>
  .infobar{
    display: flex;
    height: 100%;
    width:30%;
    border-radius: 15px 0 0 15px;
    align-items: center;
  }
  .infobar__dados{
    display:flex;
    height: 100%;
    width:90%;
    flex-direction: column;
    justify-content: space-evenly;
    padding:0 5% 0 5%;
    background-color: rgba(235, 227, 227, 0.74);
    border-radius: 15px 0 0 15px;
  }
  .box-open-infobar{
    height:8%;
    width: 6%;
  }
  .box-open-infobar__button{
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    box-shadow: 0 5px 5px 0 rgba(117, 112, 112, 0.493);
  }
  .image-arrow{
    width: 100%;
    height: 100%;
  }
</style>
