import styles from "./search.module.css"
// import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input,setInput]=useState("")
   
    const history = useNavigate();
    const handlerSubmit = (e) => {
        e.preventDefault()
        history("/?search=" + input)
        setInput("")
    }
    
    return (
        <form className={styles.container} onSubmit={handlerSubmit}>
            <div className={styles.box}>
                <input placeholder="Movie to search" type="text" className={styles.input} value={input} onChange={(e)=>setInput(e.target.value)}/>
                <div className={styles.icon}>
                    <svg viewBox="0 0 512 512" className={styles.icon} xmlns="http://www.w3.org/2000/svg">
                        <title>Search</title>
                        <path stroke-width="32" stroke-miterlimit="10" stroke="currentColor" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                        <path d="M338.29 338.29L448 448" stroke-width="32" stroke-miterlimit="10" stroke-linecap="round" stroke="currentColor" fill="none"></path>
                    </svg>
                </div>
            </div>
        </form> 
    );
}

export default Search;








