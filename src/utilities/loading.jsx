import { FaSpinner } from 'react-icons/fa';
import styles from "./loading.module.css";


const Loading = () => {
    return (
        <div className={styles.spinner}>
            <FaSpinner size={50} className={styles.spinning}/>
        </div>
    );
}

export default Loading;
