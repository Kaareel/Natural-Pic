import Context from "../components/Context";
import { useContext} from "react";
export default function Favoritos() {
  const datos = useContext(Context)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {datos.favoritos.map((imagen) => (<img src={imagen.src.small}/>))}
       
      </div>
    </div>
  );
}
