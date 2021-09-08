<template>
   <v-container>
      <v-card>
        <div id="mapContainer" justify="center"></div>
          <v-card-title>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Procurar" single-line hide-details ></v-text-field>
            <v-btn color="teal" @click="reset" large>
              <v-icon color="white">mdi-refresh</v-icon>
            </v-btn>
          </v-card-title>
          <v-data-table :headers="headers" :items="itensTable" :search="search" :footer-props="{'items-per-page-text':'Itens por página' }">
            <template v-slot:item="row">
                <tr align="center">
                  <td><v-icon id="colorList" size="30" v-bind:color="row.item.corMarker">mdi-square-rounded</v-icon></td>
                  <td>{{row.item.name}}</td>
                  <td>{{row.item.modelo}}</td>
                  <td>{{row.item.estado}}</td>
                </tr>
            </template>
          </v-data-table>
      </v-card>
    <Lista ref="ListRef"/>
  </v-container>
</template>

<script>
  import L from "leaflet";
  import moment from 'moment';
  import "leaflet/dist/leaflet.css"; 
  import Lista from '@/components/Lista'
  import equipmentJson from '@/data/equipment.json';
  import equipmentModelJson from '@/data/equipmentModel.json';
  import equipmentPositionHistoryJson from '@/data/equipmentPositionHistory.json';
  import equipmentStateJson from '@/data/equipmentState.json';
  import equipmentStateHistoryJson from '@/data/equipmentStateHistory.json';

  export default {
    data () {
        return {
          moment:moment,
          coordenadaElementoEspecifico: {},
          coordenadaAnterior: [],
          coordenadasTrack: [],
          allDatas: [],
          search: '',
          map: '',
          markers: [],
          itensList: [],
          routeMaps: [],
          dataGroup: [],
          itensTable: [],
          headers: [
            { text: 'Cor',    align: 'center', filterable: true, value: 'cor' },
            { text: 'Tipo',   align: 'center', filterable: true, value: 'name' },
            { text: 'Modelo', align: 'center', filterable: true, value: 'modelo' },
            { text: 'Status', align: 'center', filterable: true, value: 'estado'},
          ],
        }
    },
    components:{
      'Lista': Lista,
    },
    mounted() {
      equipmentJson.forEach( (element) => {
      //Load dos dados dos Json's e formatação de objeto para uso pelas demais funções;
      const element_id = element.id;

      const dataNow = equipmentPositionHistoryJson.find(position => position.equipmentId == element_id);
      const atual_position = dataNow.positions[dataNow.positions.length-1];

      const stateNow = equipmentStateHistoryJson.find(status => status.equipmentId == element_id);
      const atual_state = stateNow.states[stateNow.states.length-1];

      const stateValue = equipmentStateJson.find(status => status.id == atual_state.equipmentStateId);
      const equipmentData = equipmentJson.find(equipment => equipment.id == element_id);
      const equipmentModel = equipmentModelJson.find(model => model.id == equipmentData.equipmentModelId);

      var arr = {
        id: element_id,
        name: equipmentModel.name,
        modelo: equipmentData.name,
        estado: stateValue.name,
        data: atual_position.date,
        posicao: [
          {'lat': atual_position.lat},
          {'lon': atual_position.lon}
        ],
        corMarker: this.getRandomColor(),
        corStatus: stateValue.color,
      }
      this.itensTable.push(arr);
      });

      //Instânciação do mapa;
      this.map = L.map("mapContainer").setView([-19.2, -46], 10);
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.loadMachines();// << Chama a primeira carga de dados do mapa
    },
    methods: {
      //Retorna uma cor aleatóra para o marcador;
      getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      },
      //Desenha no mapa os marcadores de todas as máquinas relevando seus status mais recentes;
      loadMachines(){
        //lista a localização atual de todas as máquinas >>
        this.itensTable.map(e => {
          var lat = e.posicao[0].lat;
          var lon = e.posicao[1].lon;
          var cor = e.corMarker;
          var corStatus = e.corStatus;
          var date = e.data;
          let dataFormatada = this.dateFormat(date);
          this.coordenadasTrack[0] = lat;
          this.coordenadaAnterior[1] = lon;

          let mark = L.circleMarker([ lat, lon ], {
            color: corStatus,
            fillColor: cor,
            fillOpacity: 1,
            radius: 10,
            weight: 4,
            opacity: 1
          }).addTo(this.map).bindPopup('<p>Modelo: '+e.modelo+'<br>Status: '+e.estado+'<br>Data: '+dataFormatada+'</p>');
            mark.on('mouseover', function () { this.openPopup(); });
            mark.on('mouseout', function () { this.closePopup(); });
            mark.on('click', () => { this.prepareToList(e.id); this.$refs.ListRef.dadosListagem(this.itensList); });
            this.markers.push(mark);
        });
      },
      refreshMap(){
        //Remove marcadores do mapa;
        this.markers.map(e => {
          this.map.removeLayer(e);
        });
        //Remove rotas do mapa;
        this.routeMaps.map(routeElement => {
          this.map.removeLayer(routeElement);
        });
      },
      reset(){ //Chama os métodos que limpa e recarrega o mapa;
        this.refreshMap();
        this.loadMachines();
      },
      //Prepara dados parar listagem prezando por uma data existente em comum;
      prepareToList(id){
        this.itensList = []; //Limpa o array;
        var statusJson = equipmentStateHistoryJson;
        let allStatusEquipment = statusJson.find(status => status.equipmentId == id);
        allStatusEquipment = allStatusEquipment.states;

        //Calcula diferença entre timezones;
        function diffDates(hora_inicio, hora_fim){
          let final = new Date(hora_fim.substr(0, hora_fim.length-2));
          let inicial = new Date(hora_inicio.substr(0, hora_inicio.length-2));
          let miliSecs = (inicial - final);
          let diff = Math.floor( miliSecs / 1000) / 3600;
          diff = (diff < 0 ) ? diff * -1 : diff;
          return diff;
        }

        //Formata valor em reais;
        function monetario(entrada){
          entrada = typeof(entrada) != 'number' ? parseFloat(entrada) : entrada;
          var dinheiro = entrada.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          return dinheiro;
        }
        
        function dateGroup(){
          var Datas = [];
          allStatusEquipment.forEach( (elem) => {
            let data = elem.date.substr(0,10);
            if(!Datas.find( datas => datas == data )){
              Datas.push(data);
            }
          });
          return Datas;
        }

        //Formata a data para apresentação na lista;
        function dataShow(elemento){
          let dateFormated = moment(elemento).format('DD/MM/YYYY');
          return dateFormated;
        }

        //Itera elementos do stateHistory separados por dia em comum;
        this.dataGroup = dateGroup();
        this.dataGroup.forEach((elemento) => {

          //GET ID modelo de máquina;
          var modelId = equipmentJson.find(model => model.id == id);
          var equipState = equipmentModelJson.find( equipModel => equipModel.id == modelId.equipmentModelId);

          //HourStates >> 
          var data_processamento = [];
          allStatusEquipment.forEach( (elemnt, idx) => {
            let data_comparacao = elemnt.date.substr(0,10);
            try{
                if( data_comparacao == elemento){
                var dados = {
                  anterior: allStatusEquipment[idx-1],
                  atual: elemnt
                }
              data_processamento.push(dados);
              }
            }catch(e){
              console.error(e.message);
            }
          });

          //chaves para comparação de horas por estado;
          var EstadoHoras = {
            "0808344c-454b-4c36-89e8-d7687e692d57":0,
            "baff9783-84e8-4e01-874b-6fd743b875ad":0,
            "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f":0
          };
          
          //itera sobre os dados obtidos [ calcula horas de cada estado exato em 24 horas ];
          data_processamento.forEach( (el, idx) => {
            if(idx == 0 && typeof el.anterior != 'undefined'){
              let hora  = el.atual.date;
              let format = hora.split('T');
              format = format[0]+'T00'+format[1].substr(2,format[1].length);
              
              let state00 = el.anterior.equipmentStateId;
              let horas00 = diffDates( format ,el.atual.date);
              EstadoHoras[state00] += horas00;

              //Calcula do 1º index em diante
              if(typeof data_processamento[idx+1] != 'undefined'){
              let state = el.atual.equipmentStateId;
              let horas = diffDates(el.atual.date, data_processamento[idx+1].atual.date);
              EstadoHoras[state] += horas;
              }

            }else if(idx == data_processamento.length-1){
              let hora  = el.atual.date;
              let format = hora.split('T');
              format = format[0]+'T24'+format[1].substr(2,format[1].length);

              let state = el.atual.equipmentStateId;
              let horas = diffDates(el.atual.date, format);
              EstadoHoras[state] += horas;

            }
            else{
              if(typeof data_processamento[idx+1] != 'undefined'){
              let state = el.atual.equipmentStateId;
              let horas = diffDates(el.atual.date, data_processamento[idx+1].atual.date);
              EstadoHoras[state] += horas;
              }
            }
          });

          var earnings = equipState.hourlyEarnings;
          //guarada valores de calculo;
          var calculo = {
            Operando : {valor: 0, hora: 0},
            Parado: {valor: 0, hora: 0},
            Manutenção: {valor: 0 , hora: 0}
          }

          var estadosPossiveis = equipmentStateJson;
          estadosPossiveis.forEach( (item) =>{
            let Valor = earnings.find( valor => valor.equipmentStateId == item.id);
            let horaRazao = EstadoHoras[item.id];

            calculo[item.name].hora = horaRazao;
            calculo[item.name].valor =  Valor.value;
          });

          //calcula rentabilidade diária;
          function calculaGanhos(){
            let manutencao = calculo.Manutenção.hora * calculo.Manutenção.valor;
            let parado = calculo.Parado.hora * calculo.Parado.valor;
            let operando = calculo.Operando.hora * calculo.Operando.valor;
            let rendimento = (manutencao+parado+operando);
            return rendimento;
          }
          //calcula percentual de produtividade;
          function produtividade(){
            return (calculo.Operando.hora / 24 * 100).toFixed(2);
          }

          let dadosLista = {
            id: id,
            dataShow: dataShow(elemento),
            data: elemento,
            rent: monetario(calculaGanhos()),
            prod: produtividade()
          }

        this.itensList.push(dadosLista);
        });
      },
      //Mostra os markers de quipamento específico;
      showInMap(e){
        var datas = [];
        const positions = equipmentPositionHistoryJson.find(position => position.equipmentId == e.id); 
        positions.positions.forEach( (elemt) => {
         let dataComparacao = elemt.date.substr(0,10);
          if( dataComparacao == e.data){
            datas.push(elemt);
          }
        });

        //gera as novas rotas e o pontos do elemento específico >> 
        this.refreshMap(); //Limpa tela;

        datas.forEach( (element, index) => {
          function controll(idx) {
            let cor, popUp;
            if(idx == 0){
              cor = '#2AEC76';
              popUp = '<p>Ponto Inicial<br>Click-Ver painel</p>';

            }else if(idx == ( datas.length-1) ){
              cor = '#FF210E';
              popUp = '<p>Ponto Final<br>Click-Ver painel</p>';
            }else{
              cor = '#787878';
              popUp = '<p>Parada</p>';
            }
            return {cor,popUp};
          }

          var lon = element.lon;
          var lat = element.lat;
          var info = controll(index);
          this.coordenadasTrack = [lat, lon];

          let mark = L.circleMarker([ lat, lon ], {
            color: info.cor,
            fillColor: info.cor,
            fillOpacity: 1,
            radius: 10,
            weight: 4,
            opacity: 1
          }).addTo(this.map).bindPopup(info.popUp);
          mark.on('mouseover', function () { this.openPopup(); });
          mark.on('mouseout', function () { this.closePopup(); });
          mark.on('click', () => { this.$refs.ListRef.showDialog() });
          this.markers.push(mark);

          //adiciona rota entre os elementos do mapa;
          if(index > 0){
            var myLines = [{
                "type": "LineString",
                "coordinates": [ 
                  [ this.coordenadaAnterior[1] , this.coordenadaAnterior[0] ],
                  [ this.coordenadasTrack[1] , this.coordenadasTrack[0] ] 
                ]
            }];
            var myStyle = { "color": this.getRandomColor(), "weight": 5, "opacity": 0.65 };
            let routers = L.geoJSON(myLines, { style: myStyle }).addTo(this.map);
            this.routeMaps.push(routers);
          }
          this.coordenadaAnterior = [ lat, lon ];
        })
      },
      //Formata data para padrão br gmt+3;
      dateFormat(date){
        var newDate = new Date(date.substr(0,date.length-2));
        var dateFormated = newDate.toLocaleDateString('pt-br');
        let hora = ( (parseInt(this.moment(date).format('HH'))+3) );
        hora = (hora > 24) ? hora-24 : hora;
        let minuto = this.moment(date).format('mm');
        var result = dateFormated+', '+hora+':'+minuto;
        return result;
      },
    },
    beforeDestroy() {
      if (this.map) {
        this.map.remove();
      }
    },
  }
</script>
<style scoped>
  #mapContainer {
    width: 100%;
    height: 60vh;
    z-index:1;
  }

  #colorList{
    border:solid 2px black;
    border-radius:10px;
  }
</style>