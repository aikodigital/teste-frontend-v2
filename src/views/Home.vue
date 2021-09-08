<template>
    <v-app>
        <v-app-bar app color="teal" dark  absolute>
        <div>
            <v-icon size="40">mdi-pine-tree</v-icon>
        </div>
        <v-spacer></v-spacer>
        <v-btn href="/" text>
            <span class="mr-2">Início</span>
            <v-icon>mdi-home</v-icon>
        </v-btn>
        </v-app-bar>
        <v-main>
        <Table/>
        </v-main>
    </v-app>
</template>

<script>
import Table from '@/components/_Table.vue';

export default {
  name: 'App',

  components: {
    Table,
  },

  data: () => ({
    
  }),
};
</script>

<style scoped>

#logo{
    font-size: 3em;
    border-radius: 25px;
}

#logo:hover{
    color: black;
}

</style>