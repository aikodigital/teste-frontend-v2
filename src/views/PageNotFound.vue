<template>
  <v-app>
    <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col class="text-center" cols="12">
      <v-icon size="200" color="teal">mdi-folder-alert-outline</v-icon>
      <h1 class="text-h3 font-weight-light mb-4" >Página não encontrada!</h1>
      <v-btn color="teal" @click="$router.go(-1) "><v-icon>mdi-keyboard-return</v-icon>Voltar</v-btn>
      </v-col>
    </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>


</style>