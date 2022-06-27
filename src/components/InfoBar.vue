<template>
  <aside  class="infobar">
    <section  class="infobar">
      <div class="infobar__dados">
      <div>
        <h2>Equipamentos</h2>
        <hr>
      </div>
      <div>
        <h2>Modelos</h2>
        <hr>
      </div>
      </div>
    </section>
  </aside>
</template>

<script>

export default {
  name: 'InfoBar',
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
