import { useEffect, useState } from 'react';
import styles from './FavoritePage.module.css';
import { useSelector } from 'react-redux'
import PeopleList from '@Components/PeoplePage/PeopleList/PeopleList';

const FavoritePage = () => {
    const [people,setPeople] = useState([])
    const storeData = useSelector(state => state.favoriteReducer)   

    useEffect(() =>{

        const buf = Object.entries(storeData)

        if (buf.length){
            const res = buf.map(el => {return {id: el[0],...el[1]}})
            setPeople(res)
        }  
    },[])

    return(
        <>
            <h1 className='header__text'>Faforites</h1>
            {people.length 
                ? <PeopleList people={people}/>
                : <h2 className={styles.comment}>No data</h2>
            }
        </>
)}

export default FavoritePage;