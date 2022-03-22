import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./favoritos.css";
import { toast } from "react-toastify";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function handleDelete(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("filmes", JSON.stringify(filtroFilmes));
    toast.success("Filme Excluido com sucesso");
  }

  return (
    <div id="meus-filmes">
      <h1>Meus Filmes</h1>
      {filmes.length === 0 && (
        <span>Você não possui nenhum filme salvo.. 😭</span>
      )}
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>
              <div className="minhali">
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button className="button-trash"onClick={() => handleDelete(item.id)}>
                
                <img src="https://img.icons8.com/ios-filled/30/000000/delete-trash.png"/>
                  
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
