<template>
  <aside class="infobar">
    <section v-show="mostrar_infobar" class="infobar__dados">
      <div>
        <h2>Equipamentos</h2>
        <hr>
      </div>
      <div>
        <h2>Modelos</h2>
        <hr>
      </div>
    </section>
    <div class="box-open-infobar">
      <button @click="AbreInfobar"
      class="box-open-infobar__button"
      alt="Botão de abertura e fechamento da aba de informações dos equipamentos">
        <img src="../assets/img/seta-lado-direito.svg" class="image-arrow"/>
      </button>
    </div>
  </aside>
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
