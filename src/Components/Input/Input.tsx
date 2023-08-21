import {FC, HTMLAttributes} from 'react';
import styles from './Input.module.scss';

interface IInputProps extends HTMLAttributes<HTMLInputElement> {

}

const Input: FC<IInputProps> = ({
  className,
  ...props
  }) => {

  const rootClasses = [
    className,
    styles['input']
  ]

  return (
    <input
      {...props}
      className={rootClasses.join(' ')}

    />
  );
};

export default Input;
