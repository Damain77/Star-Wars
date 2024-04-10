import { useNavigate } from 'react-router-dom';
import image from './img/left-arrow.svg'
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const navigate = useNavigate()
    
    const handleGoBack = e => {
        e.preventDefault()
        navigate(-1)        
    }

    return(
        <a
            href='#'
            onClick={handleGoBack}
            className={styles.link}
        >
            <img className={styles.link__img} src={image}/>
            <span>Go Back</span>
        </a>
)}


export default PersonLinkBack;