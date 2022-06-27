<template>
  <header class="header">
    <img class="header__logo-aiko"
    src="../assets/img/aiko.png"
    alt="Logo da empresa Aiko, composta por seu nome escrito na cor azul"/>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style>
  .header{
    display: flex;
    align-items: center;
    height: 10%;
    border-bottom: 1px solid rgb(146, 136, 136);
  }
  .header__logo-aiko{
    height: 80%;
    margin-left: 1%;
  }
</style>
