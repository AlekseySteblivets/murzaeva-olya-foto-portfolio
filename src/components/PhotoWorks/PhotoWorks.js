import photo from '../../assets/img/weddings/number1.jpg';

import styles from './PhotoWorks.module.scss';

export default function PhotoWorks ({nameCategory}) {
    return(
        <>
        <h3 className={styles.title}>{nameCategory}</h3>
        <a href='/'>
             <img alt="foto wedding" src={photo}/>
        </a>
           
        </>
    )
    
}