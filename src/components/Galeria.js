import { useContext, useEffect, useState } from "react";
import { isJsxFragment } from "typescript";
import "../assets/css/galeria.css";
import Context from "./Context";
import Heart from "./Heart";

export default function Galeria() {
  const datos = useContext(Context)

  function agregarFavorito(imagen) {
    if(datos.favoritos.find(favorito => favorito.id === imagen.id)){
      datos.setFavoritos(datos.favoritos.filter(favorito => favorito.id !== imagen.id))
      return
    }
    datos.setFavoritos([...datos.favoritos, imagen])
  }


  return (
    <div className="galeria grid-columns-5 p-3">
      {datos.fotos.map((imagen) => (<div className="foto"><img src={imagen.src.small}/>
       <Heart filled={datos.favoritos.find(favorito => favorito.id === imagen.id)} onClick={() => agregarFavorito(imagen)}/></div>))}


    </div>
  );
}
