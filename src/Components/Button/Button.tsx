import {FC, ReactNode} from "react";
import styles from './Button.module.scss';

interface IButtonProps {
  children: ReactNode[],
  className?: string,
}

const Button: FC<IButtonProps> = ({
  children,
  className
  }) => {

  const rootClasses = [
    className,
    styles['button']
  ]

  return (
    <button className={rootClasses.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
