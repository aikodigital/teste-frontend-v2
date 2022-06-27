<template>
   <div class="box-open-infobar">
          <button @click="$emit('AbreInfobar')"
            class="box-open-infobar__button"
            alt="Botão de abertura e fechamento da aba de informações dos equipamentos">
            <img src="../../assets/img/seta-lado-direito.svg" class="image-arrow"/>
          </button>
        </div>
</template>

<script>

export default {
  name: 'ButtonComponent',
  emits: ['AbreInfobar'],
};
</script>

<style scoped>
  .box-open-infobar{
    height:8%;
    width: 1.5%;
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
