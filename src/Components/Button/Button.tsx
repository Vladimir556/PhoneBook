import {FC, ReactNode, HTMLAttributes} from "react";
import styles from './Button.module.scss';

interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
  children: ReactNode[],
}

const Button: FC<IButtonProps> = ({
  children,
  className,
  ...props
  }) => {

  const rootClasses = [
    className,
    styles['button']
  ]

  return (
    <button
      {...props}
      className={rootClasses.join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
