import styles from './Header.module.scss';
import {Button} from "../index";

const Header = () => {

  const rootClasses = [
    styles['header']
  ]

  return (
    <div className={rootClasses.join(' ')}>
      <div className={styles['header-search']}>

      </div>
      <div className={styles['header-main']}>
        <Button/>
        <ul>
          <li>
            Имя
          </li>
          <li>
            Телефон
          </li>
          <li>
            Адрес
          </li>
          <li>
            Электронная почта
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
