
const obtenerPokemons = async () => {
  
    const vectorObj = await obtenerElementosPokemon(obtenerVectorNumerico());
  
   
    return vectorObj;
  };
  
  function getNumeroAleatorio(min, max) {
    
    max++;
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const obtenerVectorNumerico = () => {
    const vector = [
      getNumeroAleatorio(1, 600),
      getNumeroAleatorio(1, 600),
      getNumeroAleatorio(1, 600),
      getNumeroAleatorio(1, 600),
      getNumeroAleatorio(1, 600),
    ];
    return vector;
  };
  

  const consumirApiTexto = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
      (result) => result.json()
    );
  
    return data;
  };
  
  
  const obtenerElementosPokemon = async () => {
    const vectorAux = obtenerVectorNumerico();
  
    const id1 = vectorAux[getNumeroAleatorio(1, 5)];
    const id2 = vectorAux[getNumeroAleatorio(1, 5)];
    const id3 = vectorAux[getNumeroAleatorio(1, 5)];
    
  
    const data1 = await consumirApiTexto(id1);
    const data2 = await consumirApiTexto(id2);
    const data3 = await consumirApiTexto(id3);
  
   
  
    
    const obj1 = {
      nombre: data1.name,
      id: data1.id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data1.id}.svg`,
    };
    const obj2 = {
      nombre: data2.name,
      id: data2.id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data2.id}.svg`,
    };
    const obj3 = {
      nombre: data3.name,
      id: data3.id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data3.id}.svg`,
    };
  
    
    const vectorObjetos = [obj1, obj2, obj3];
  
    return vectorObjetos;
  };
  
  
  
  
  const obtenerFachadaPokemons = async () => {
    return await obtenerPokemons();
  };
  
  export default obtenerFachadaPokemons;
  