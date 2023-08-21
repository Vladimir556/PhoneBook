import styles from './Header.module.scss';
import {Button, GamepadCircle} from "../index";
import useModal from "../../hooks/useModal";
import Input from "../Input/Input";

const Header = () => {

  const rootClasses = [
    styles['header']
  ]

  const [gamePad, toggleGamePad] = useModal()

  return (
    <>
      <div className={rootClasses.join(' ')}>
        <div className={styles['header-search']}>
          <Input/>
        </div>
        <div className={styles['header-main']}>
          <Button
            onClick={toggleGamePad}
          />
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

      <GamepadCircle isOpen={gamePad} toggleModal={toggleGamePad}/>
    </>
  );
};

export default Header;
