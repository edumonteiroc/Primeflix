import { Link } from "react-router-dom";
import './Erro.css';
function Erro(){
    return(
        <div className="not_found">
            <h1>404</h1>
            <h2>Pagina nao encontrada</h2>
            <Link to='/'>Veja Todos os filmes</Link>
        </div>
    )
}

export default Erro;