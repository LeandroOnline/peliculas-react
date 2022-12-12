import styles from "./search.module.css"
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input,setInput]=useState()
   
    const history = useNavigate();
    const handlerSubmit = (e) => {
        e.preventDefault()
        history("/?search=" + input)
    }
    
    return (
        <form className={styles.conteiner} onSubmit={handlerSubmit}>
            <div className={styles.box}>
                <input type="text" className={styles.input} value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button className={styles.button}><FaSearch/></button>
            </div>
        </form>
    );
}

export default Search;
