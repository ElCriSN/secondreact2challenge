import "../assets/css/galeria.css";

import { useContext } from "react";

import Context from "../Context";
import Heart from "./Heart";

export default function Galeria() {
  const { galeria, setGaleria } = useContext(Context);
  return (
    <div className="galeria grid-columns-5 p-3 foto">
      {galeria.map((foto) => {
        return (
          <div className="galeria foto" key={foto.id} style={{ backgroundImage: `url(${foto.src.tiny})` }} onClick={() => {
            const index = galeria.findIndex((ele) => ele.id === foto.id)
            galeria[index].liked = !galeria[index].liked
            setGaleria([...galeria])
          }
          }>
            <Heart filled={foto.liked} />
            {foto.alt}
          </div>
        )
      })}
    </div>
  );
}
