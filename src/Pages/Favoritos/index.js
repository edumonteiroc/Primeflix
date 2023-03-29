import React from 'react';
import './favoritos.css';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


function Favoritos(){
    
    const [filmes, setFilmes] = useState([]);
    
    useEffect(()=>{

        const minhaLista = localStorage.getItem('@primeFlix');
        setFilmes(JSON.parse(minhaLista) || [])


    },[])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter((filme)=>{
            return (filme.id != id);
        })
        setFilmes(filtroFilmes);
        localStorage.setItem("@primeFlix", JSON.stringify(filtroFilmes))
        alert("filme removido com sucesso")
    }

    return(
        <div className='meus_filmes'>
            <h1>meus filmes</h1>
            <ul>
                {filmes.map((filme)=>{
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver Detalhes</Link>
                                <button onClick={()=> excluirFilme(filme.id)}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Favoritos;