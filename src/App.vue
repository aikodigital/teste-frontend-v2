<template>
  <div class="container">
    <HeaderComponent/>
    <section class="section-container">
      <main class="main">
        <InfoBarComponent/>
        <MapComponent/>
      </main>
    </section>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import InfoBarComponent from './components/InfoBarComponent.vue';
import MapComponent from './components/MapComponent.vue';

export default {
  name: 'AppTeste',
  components: {
    HeaderComponent,
    InfoBarComponent,
    MapComponent,
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
  border: 1px solid #000;
  border-radius:15px;
  }
</style>
