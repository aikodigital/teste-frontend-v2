<template>
  <section class="info-bar">
    <span class="material-symbols-outlined">
      chevron_right
    </span>
    <h1>Nome equipamento</h1>
    <h2>Modelo do equipamento</h2>
    <h3>Posição atual</h3>
    <h3>Estado do equipamento</h3>
    <button>Histórico de posiçoes</button>
    <button>Histórico de estados</button>
  </section>
</template>

<script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
export default {
  name: 'InfoBarComponent',
};
</script>

<style scoped>
  .info-bar{
    display: flex;
    flex-direction: column;
    padding-left: 1%;
    height: 100%;
    width:30%;
    background-color: rgb(235, 227, 227);
    border-radius: 15px 0 0 15px;
  }
  .material-symbols-outlined{
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
</style>
