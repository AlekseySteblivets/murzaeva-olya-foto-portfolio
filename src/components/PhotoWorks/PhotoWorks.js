import { Link } from 'react-router-dom';
import photo from '../../assets/img/weddings/number1.jpg';

import styles from './PhotoWorks.module.scss';

export default function PhotoWorks({ nameCategory }) {
  return (
    <>
      <h3 className={styles.title}>{nameCategory}</h3>
      <Link to={`portfolio/${nameCategory}`}>
        <img alt={`foto ${nameCategory}`} src={photo} />
      </Link>
    </>

    // href={`#${nameNav1}`}
  );
}
