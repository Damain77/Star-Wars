import styles from './PersonInfo.module.css';
import PropTypes from 'prop-types';

const PersonInfo = ({personInfo}) => {
   
  return(
    <div className={styles.wrapper}>
        <ul className={styles.list__container}>
            {personInfo.map(({title,data}) =>{
                return data && (                            
                    <li className={styles.list__item} key={title}>
                        <span className={styles.item_title}>{title}</span>:{data}
                    </li>
                )
            })}
        </ul>
    </div>
)}

PersonInfo.propTypes = {
    // setErrorApi: PropTypes.func,
  }

export default PersonInfo;