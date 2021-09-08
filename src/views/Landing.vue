<template>
    <v-app class="main">
        <v-app-bar app color="transparent" dark elevation="0">
            <v-icon class="mb5 ms5" id="logo_landing" size="40">mdi-pine-tree</v-icon>
            <v-spacer></v-spacer>
            <v-btn href="/home" text >
            <span class="mr-2">Ver Mapa</span>
                <v-icon>mdi-map</v-icon>
            </v-btn>
        </v-app-bar>
        <v-container fluid fill-height>
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12"> 
                    <transition name="fade">
                        <h1 class="text-h4 font-weight-thin mb-4 white--text">
                            Aiko Florestal
                        </h1>
                    </transition>
                        <h3 class="subheading font-weight-light white--text">
                            Ferramenta de gerenciamento de equipamentos florestais
                        </h3>
                </v-col>
            </v-row>
        </v-container>
  </v-app>
</template>
<script>
export default {
    data: () => ({
     
    }),
}
</script>

<style scoped>

.main{
    background-image: url("../assets/bg01.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    max-height: 100%;
    max-width: 100%;
}

#logo_landing{
    font-size: 3em;
    border-radius: 10px;
}

#logo_landing:hover{
    color:teal;
    background-color: rgba(255,255,255,0.2);
}
</style>