import { useContext } from "react";

import Context from "../Context"

export default function Favoritos() {
  const { galeria } = useContext(Context);

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {galeria.filter((foto) => foto.liked === true).map((foto) => {
          return (
            <div className="galeria foto" key={foto.id} style={{ backgroundImage: `url(${foto.src.tiny})`}}>
            </div>
          )
        })
        }
      </div>
    </div>
  );
}
