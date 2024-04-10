import styles from './PersonFoto.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'
// import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '@store/constants/actionTypes';
import { removePersonFromFavorite, setPersonToFavorite } from '@store/actions';
import icon_favorite from './img/favorite_full.svg'
import icon_Nofavorite from './img/favoriteFFFF.svg'

const PersonFoto = ({
  personFoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite
}) => {

  const dispatch = useDispatch()

  const dispatchFavoritePeople = () => {
    if (personFavorite ) {
      dispatch(removePersonFromFavorite(personId))
      setPersonFavorite(false)
    } else {
      dispatch(setPersonToFavorite({
        [personId]: {
          name: personName,
          img: personFoto,      
        }
      }));
      setPersonFavorite(true)
    }
      
  }
 
  return(
    <>
      <div className={styles.container}>
        <img
          className={styles.foto}
          src={personFoto}
          alt={personName}
        />
        <img
          className={styles.favorite}
          onClick={dispatchFavoritePeople} 
          src= {personFavorite ? icon_favorite : icon_Nofavorite}
          alt='add to favorite'
        />
      </div> 
    </>
)}

PersonFoto.propTypes = {
    personFoto: PropTypes.string,
    personName: PropTypes.string,
    personId: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func,
  }

export default PersonFoto;