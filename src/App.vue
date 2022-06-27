<template>
  <div class="container">
    <HeaderComponent/>
    <section class="section-container">
      <main class="main">
        <InfoBar  v-show="mostrar_infobar"/>
        <ButtonComponent @abre-infobar="AbreInfobar"/>
        <MapComponent/>
      </main>
    </section>
  </div>
</template>

<script>
import HeaderComponent from './components/Header.vue';
import InfoBar from './components/InfoBar.vue';
import MapComponent from './components/Map.vue';
import ButtonComponent from './components/InfoBar/Button.vue';

export default {
  name: 'AppTeste',
  components: {
    HeaderComponent,
    InfoBar,
    MapComponent,
    ButtonComponent,
  },
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
<style>
  *{
    margin: 0;
    padding: 0;
  }
 html,body{
  height: 100%;
 }
 #app{
  height: 100%;
 }
 .container{
  height: 100%;
 }
 .section-container{
  display: flex;
  height: 90%;
  justify-content: center;
  align-items: center;
 }
 .main{
  display:flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 90%;
  border: 0.5px solid #000;
  border-radius:15px;
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
</style>
