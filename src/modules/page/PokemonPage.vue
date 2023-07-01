<template>
    <div class="principalPage" v-if="!perdiste && puntaje < 10">
      <h1>Juego Casino</h1>
  
      <label id="score" for="">Puntaje:{{ puntaje }}</label>
      <br />
      <label id="intend" for="">Intentos:{{ intento }}</label>
  
      <PokemonOps :opciones="arregloTexto" />
    </div>
  
    <div class="ganadorVentana" v-else-if="!perdiste && puntaje >= 10">

      <label id="score1" for="">Puntaje:{{ puntaje }}</label>

      <h2 id="ganador1"> Felicitaciones, has ganado un premio de $10.000,00</h2>
    </div>
  
    <div v-else>
      <h2 id="perdida1">Haz utilizado tus 5 intentos</h2>
      <br>
      <h2 id="perdida2">El juego ha terminado, inténtalo nuevamente</h2>
    </div>
  
    <button id="jugar" @click="cargaJuegoInicial()" v-if="!perdiste && puntaje < 10">JUGAR</button>
  
    <button id="nuevo" @click="reiniciarTodo()" v-else>Nuevo Juego</button>
  </template>
  
  <script>


  import PokemonOps  from '../components/PokemonOps.vue'

  import obtenerFachadaPokemons from '../helpers/clientePokemon'
  
  export default {
    data() {
      return {
        arregloTexto: [0, 0, 0],
        puntaje: 0,
        intento: 5,
        perdiste: false,
      };
    },
    components: {
      PokemonOps,
    },
    methods: {
      async cargaJuegoInicial() {
        const arregloPokemon = await obtenerFachadaPokemons();
        this.arregloTexto = arregloPokemon;
        this.actualizarPuntaje();
  
        if (this.intento === 0 && this.puntaje < 10) {
          this.perdiste = true;
        }
      },
      actualizarPuntaje() {
        this.intento--;
        if (
          this.arregloTexto[0].id == this.arregloTexto[1].id &&
          this.arregloTexto[0].id == this.arregloTexto[2].id
        ) {
          this.puntaje += 5;
        } else if (
          this.arregloTexto[0].id == this.arregloTexto[1].id ||
          this.arregloTexto[0].id == this.arregloTexto[2].id ||
          this.arregloTexto[1].id == this.arregloTexto[2].id
        ) {
          this.puntaje += 2;
        }
      },
      
      reiniciarTodo() {
        this.arregloTexto = [0, 0, 0];
        this.puntaje = 0;
        this.intento = 5;
        this.perdiste = false;
      },
    },
  };
  </script>
  
  <style scope>
  
  
  
  #jugar,#nuevo{
    margin-top: 15px;
    background-color: white;
    color: black;
    border: 4px solid black;  
  }
  
  #perdida1,#perdida2{
    color: red;
  }
  
  #ganador1,#score1{
    color: blue;
  }
  
  .principalPage {
    border: 5px solid black;
    padding-bottom: 150px;
  }
  
  #play:hover {
    margin-top: 15px;
    background-color: yellow;
  }
  
  #ganador2{
      width: 200px;
      height: 200px;
  }
  </style>
  