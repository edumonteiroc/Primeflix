import React from 'react';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../../services/api';
import './Filme-info.css';



function Filme(){
    const {  id  } = useParams();
    const navigation = useNavigate();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    useEffect(()=>{
        async function loadFilme(){
            await api.get(`https://api.themoviedb.org/3/movie/${id}`,{
                params:{
                    api_key: '9ab1fbe9e58b9b8050df0316a4807952',
                    language: 'pt-BR',
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigation("/", {replace: true})
            })
        }
        loadFilme()
        

    }, [navigation, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem('@primeFlix');
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilme = filmesSalvos.some((filmesSalvo)=>filmesSalvo.id === filme.id)

        if(hasFilme){
            alert("Este filme já está na sua lista");
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem('@primeFlix', JSON.stringify(filmesSalvos));
        alert('filme salvo com sucesso')
    
    }

    if(loading){
        return(
            <div className="filme_info">
                <h1>Carregando detalhes</h1>
            </div>
        )
    }

    return(
        <div className="filme_info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}/>
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>
            <div className="area_buttons">
                <button onClick={salvarFilme}>salvar</button>
                <button>
                    <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title}Trailer`}>Trailer</a>
                </button>

            </div>
        </div>
    );
}

export default Filme;