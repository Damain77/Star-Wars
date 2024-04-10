import styles from './UILoading.module.css';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import cn from 'classnames'

import loader_white from './img/loader-white.svg'
import loader_black from './img/loader-black.svg'
import loader_blue from './img/loader-blue.svg'

const UILoading = ({theme='white', isShadow=true, classes=''}) => {

  const [loaderIcon, setLoaderIcon] = useState(null)

  useEffect(()=>{
    switch (theme) {
      case 'white':
        setLoaderIcon(loader_white)        
        break;
      case 'black':
        setLoaderIcon(loader_black)        
        break;
      case 'blue':
        setLoaderIcon(loader_blue)        
        break;
    }
  },[])

  return(
    <img 
      className={cn(styles.loader,isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt='loader'
    /> 
)}

UILoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string
  }

export default UILoading;