import styles from "./search.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input,setInput]=useState("")
   
    const navigate = useNavigate();
    
    const handlerSubmit = (e) => {
        e.preventDefault()
        navigate("movies/?search=" + input)
        setInput("")
    }
    
    return (
        <form className={styles.container} onSubmit={handlerSubmit}>
            <div className={styles.box}>
                <input placeholder="Movie to search" type="text" className={styles.input} value={input} onChange={(e)=>setInput(e.target.value)}/>
            </div>
        </form> 
    );
}

export default Search;








