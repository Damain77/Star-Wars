import styles from './UIbutton.module.css';
import '../../UI/index.css'
import PropTypes from 'prop-types';
import cn from 'classnames'

const UIbutton = ({toPage, children,theme='dark', classes}) => {
   
  return(
    <button className={cn(styles.button, styles[theme],classes)} disabled={!toPage}>
        {children}
    </button>
)}

UIbutton.propTypes = {
    toPage: PropTypes.string,
    children: PropTypes.string,
    theme: PropTypes.string,
    classes: PropTypes.string
  }

export default UIbutton;