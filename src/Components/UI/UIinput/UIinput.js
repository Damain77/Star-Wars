import styles from './Uiinput.module.css';
import '../index.css'
import PropTypes from 'prop-types';
import cn from 'classnames'
import cancel from './img/cancel.svg'

const UIinput = ({value, handleInputChange, placeholder, classes}) => (
    <div className={cn(styles.wrapper__input, classes)}>
        <input
            className={styles.input}
            type='text'
            value={value} 
            onChange={e => handleInputChange(e.target.value)}
            placeholder={placeholder}
        />
        <img 
            className={cn(styles.clear, !value && styles.clear__disabled)}
            src={cancel}
            onClick={()=>value && handleInputChange('')}
            alt='cancel'
        />
    </div>
)

UIinput.propTypes = {
    handleInputChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
  }

export default UIinput;