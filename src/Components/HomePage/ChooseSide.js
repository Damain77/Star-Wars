import styles from './ChooseSide.module.css';
import PropTypes from 'prop-types';
import { useTheme, THEME_DARK, THEME_LIGHT, THEME_NEUTRAL } from '@context/ThemeProvider';
import cn from 'classnames'
import imgDarkSide from './img/dark-side.jpg'
import imgFalcon from './img/falcon.jpg'
import imgLightSide from './img/light-side.jpg'

const ChooseSideItem = ({img, theme, children, classes}) => {
    const isTheme = useTheme()
    
    return (
    <div onClick = {() => isTheme.change(theme) } className={cn(styles.item,classes)}>
        <div className={styles.item__header}>{children}</div>
        <img className={styles.item__img} src={img} alt={children}/>
    </div>
)}

ChooseSideItem.propTypes = {
    img: PropTypes.string,
    onClick: PropTypes.string,
    children: PropTypes.string,
    classes: PropTypes.string,
  }


const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            img: imgLightSide,
            text: 'Light Side',
            classes: styles.item__light
        },
        {
            theme: THEME_DARK,
            img: imgDarkSide,
            text: 'Dark Side',
            classes: styles.item__dark
        },
        {
            theme: THEME_NEUTRAL,
            img: imgFalcon,
            text: 'Im Han Solo',
            classes: styles.item__neutral
        }
    ]

    return (
        <div className={styles.container}>
            {elements.map(({theme,img,text,classes},index) => (
                <ChooseSideItem
                    key={index}
                    theme = {theme}
                    img={img}
                    classes={classes}
                >
                    {text}
                </ChooseSideItem>
            ))}            
        </div>
)}

export default ChooseSide;


