import bookmark from './img/bookmark.svg'
import styles from './Favorite.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';

const Favorite = () => {
    const storeData = useSelector(state => state.favoriteReducer)
    const [count, setCount] = useState(null)

    useEffect(() =>{
        const length = Object.keys(storeData).length
        length.toString.length > 2 ? setCount('...') : setCount(length)
    })
   
    return(
        <div className={styles.container}> 
            <Link to='/favorite/'>
                <span className={styles.counter}>{count}</span>
                <img 
                    className={styles.icon}
                    src={bookmark}
                    alt='icon'
                />
            </Link>
        </div>

)}


export default Favorite;