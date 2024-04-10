import { makeConcurrentrequest, changeHTTP } from '@Utils/network';
import styles from './PersonFilms.module.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const PersonFilms = ({personFilms}) => {
    const [filmsName, setFilmsName] = useState(null)

    useEffect(() =>{
        (async () => {
           const response = await makeConcurrentrequest(personFilms)
           setFilmsName(response)
        })()
    },[])


    return(
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsName && filmsName
                    .sort((a,b) => a.episode_id - b.episode_id)
                    .map(({title,episode_id}) => {
                        return (
                            <li className={styles.list__item} key={episode_id}>
                                <span className={styles.item__episode}>Episode {episode_id}</span>
                                <span className={styles.colon}>:</span>
                                <span className={styles.title}>{title}</span>
                            </li>
                        )
                    })                
                }
            </ul>
        </div>
)}

PersonFilms.propTypes = {
    personFilms: PropTypes.array,
  }

export default PersonFilms;