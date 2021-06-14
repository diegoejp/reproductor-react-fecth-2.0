import { useState } from "react";

function Reproductor(props){
    const [cancion,setCancion] = useState({
        nombre : null,
        url : null,
        id : null,
        indice : null,
    });

    
    return(
        <>
            <div className="row">
                <div className="col-md-12">
                    <ul>
                        {
                            !! props.listado &&
                            props.listado.map((value,index)=>{
                            return(
                                <li
                                className={(cancion.indice === index ? "clase": "")}
                                onClick={()=>{
                                    setCancion({
                                        nombre : value.name,
                                        url : value.url,
                                        indice : index
                                    });
                                }}
                                key={value.id}>
                                    {value.name}
                                </li>
                            )
                        })
                    }
                       
                    </ul>
                </div>
                <div className="col-md-12">
                    <audio src={"https://assets.breatheco.de/apis/sound/"+cancion.url} controls></audio>
                </div>
                
            </div>
        </>
    )
}

export default Reproductor;