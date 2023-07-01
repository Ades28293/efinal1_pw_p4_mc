
<template>
    <div class="contenedor">
      
        <div class="container-label" >
          <img 
            id="imgPokemon"
            :src="pokemon.img || 'https://p4.wallpaperbetter.com/wallpaper/238/702/429/abstract-texture-hd-4k-wallpaper-preview.jpg'"
            v-for="pokemon in opciones"
            :key="pokemon.id"
            alt="No se puede mostrar la imagen"
          />
  
         
        </div>
  
        <div>
          <li id="optionsPokemon" v-for="pokemon in opciones" :key="pokemon.id">
            {{ pokemon.nombre || "xxxxxxxxx"}}
          </li>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    props: {
      opciones: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scope>
  .container-label {
    display: flex;
    justify-content: center;
    margin-top: 55px;
  
    padding: 25px;
  }
  
  #optionsPokemon {
    display: inline-block;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    margin-left: 185px;
    margin-right: 70px;
    width: 200px;
    cursor: pointer;
    list-style-type: none;
  }
  
  #imgPokemon {
      width: 200px;
      height: 200px;
    margin-left: 210px;
    margin-right: 90px;
    border: 5px solid black;
  }
  
  li:hover {
    background-color: aqua;
  }
  
  #play {
    width: 250px;
    height: 50px;
    background-color: white;
    font-weight: bold;
    border: 5px solid;
    font-size: 25px;
  }
  
  #play:hover {
    background-color: yellow;
  }
  </style>