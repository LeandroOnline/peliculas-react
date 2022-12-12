// import { FaSpinner } from 'react-icons/fa';
import styles from "./loading.module.css";


const Loading = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <div className={styles.face}>
                    <div className={styles.circle}></div>
                </div>{/* <FaSpinner size={50} className={styles.spinning}/> */}
                <div className={styles.face}>
                    <div className={styles.circle}></div>
                </div>
            </div>
        </div>
    );
}

export default Loading;