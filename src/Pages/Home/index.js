import { useEffect, useState } from "react";
import axios from "axios";
import api from '../../services/api';
import { Link } from "react-router-dom";
import './Home.css';
// https://api.themoviedb.org/3/movie/now_playing?api_key=9ab1fbe9e58b9b8050df0316a4807952&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get('https://api.themoviedb.org/3/movie/now_playing', {
                params:{
                    api_key: "9ab1fbe9e58b9b8050df0316a4807952",
                    language: "pt-BR",
                    page: 1,
                }
            }) 
            setFilmes(response.data.results.slice(0,15))
            setLoading(false);
        }
            
            loadFilmes();
    },[])
    if(loading){
        return(
            <div className="loading">
                <h2>carregando filmes...</h2>
            </div>
        )
    }
    
    
    return(
        <div className="container">
            <div className="lista_filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
            
        </div>
    );
}

export default Home;