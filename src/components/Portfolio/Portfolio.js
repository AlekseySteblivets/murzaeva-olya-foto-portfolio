import PhotoWorks from '../PhotoWorks';
import { namesCategory } from '../../utils/namesCategory';

import styles from './Portfolio.module.scss';

export default function Portfolio(params) {
  return (
    <>
      <h2 className={styles.title}>Portfolio</h2>
      <ul className={styles.menu}>
        {namesCategory.map(name => (
          <li className={styles.item} key={name}>
            <PhotoWorks nameCategory={name} />
          </li>
        ))}
      </ul>
    </>
  );
}
