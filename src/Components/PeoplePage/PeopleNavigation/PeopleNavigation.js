import styles from './PeopleNavigation.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import UIbutton from '@UI/UIbutton/UIbutton';

const PeopleNavigation = ({
    getResourse,
    prevPage,
    nextPage,
    counterPage
}) => {
   
  return(
    <div className={styles.container}>
        <Link to={`/people/?page=${counterPage - 1}`} className={styles.buttons}>
            <UIbutton toPage={prevPage} theme='dark'>Previous</UIbutton>
        </Link>
        <Link to={`/people/?page=${counterPage + 1}`} className={styles.buttons}>
            <UIbutton toPage={nextPage}>Next</UIbutton>            
        </Link>
    </div>
)}

PeopleNavigation.propTypes = {
    getResourse: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number,
  }

export default PeopleNavigation;