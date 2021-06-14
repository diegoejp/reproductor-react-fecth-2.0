import { useState,useEffect } from "react";
import Reproductor from "./Componentes/reproductor"

function App() {
  const [listado,setListado] = useState({
    canciones : null
  });

    async function consulta(){
    try {
      const response = await fetch("https://assets.breatheco.de/apis/sound/songs",{
        method : "GET",
        headers : {
          "Content-Type" : "application/json"
        }

      });
      if(response.status ===404) throw new Error ("pagina no existe csm!");

      const data = await response.json();
      console.log(data);
      setListado({
        
        canciones : data});
        
     
    } catch (error) {
      console.log(error);
    }

  
  }

   useEffect(()=>{
    consulta();
    
  },[]);
  
  return(
    <>
    <h1>Reproductor</h1>
     <Reproductor listado={listado.canciones}/>  
    </>
  )
}

export default App;
