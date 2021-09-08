<template>
 <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="60%" >
      <v-card>
        <v-card-title>Histórico do Equipamento</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height:15%;">
          <v-card class="mx-auto" width="100%" tile>
              <v-list-item v-for="(item, index) in listContent" :key="index" two-line>
                <v-list-item-content>
                  <v-list-item-title>Data: {{item.dataShow}}</v-list-item-title>
                    <v-list-item-subtitle>Rentabilidade: {{item.rent}} | Produtividade: {{item.prod}}% </v-list-item-subtitle>
                </v-list-item-content>
                <v-btn color="teal" large @click="revealInMap(item)"><v-icon color="white">mdi-map</v-icon></v-btn>
              </v-list-item>
          </v-card>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="teal" text @click="dialog = false">
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
   data () {
        return {
            dialog: false,
            listContent: [{dataShow: "Sem registro"}]
        }
    },
    methods: {
        dadosListagem(dados){
          this.dialog = true;
          this.listContent = [];
          this.listContent = dados;
        },
        revealInMap(item){
          this.$parent.showInMap(item);
          this.dialog = (!this.dialog);
        },
        showDialog(){
          this.dialog = (!this.dialog);
        }
    },
  }
</script>
<style scoped>
</style>