
import styles from './GamepadCircleCell.module.scss';
import account from "../../../assets/account-plus.svg";
import {FC, HTMLAttributes} from "react";

interface IGamepadCircleCellProps extends HTMLAttributes<HTMLDivElement>{

}

const GamepadCircleCell: FC<IGamepadCircleCellProps> = ({
  children,
  ...props
  }) => {
  return (
    <div {...props} className={styles['circle-cell']}>
      <div className={styles['circle-cell__content']}>
        <img src={account} alt=""/>
        {children}
      </div>
    </div>
  );
};

export default GamepadCircleCell;
