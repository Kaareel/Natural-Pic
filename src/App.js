import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Context from "./components/Context";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { useEffect, useState } from "react";

export default function App() {
  const endpoint = "/fotos.json";
  const [fotos, setFotos] = useState([])
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    async function traerFotos() {
      const response = await fetch(endpoint)
      const data = await response.json()
      setFotos(data.photos)

    }
    traerFotos()
  }, [])

  return (
    <div className="App">
      <Context.Provider value={{fotos, setFotos, favoritos, setFavoritos}}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>

    </div>
  );
}
