import {Button} from "../index";
import styles from './ContactCard.module.scss';
import {FC} from "react";

interface IContactCardProps {
  imgSrc: string,
  name: string,
  phone: string,
  address: string,
  email: string
}

const ContactCard: FC<IContactCardProps> = ({
  imgSrc,
  name,
  phone,
  address,
  email
  }) => {

  const rootClasses = [
    styles['contact-card']
  ]

  return (
    <div className={rootClasses.join(' ')}>
      <img
        className={styles['contact-card__avatar']}
        src={imgSrc}
        alt="avatar"
      />
      <div className="name">
        {name}
      </div>
      <div className="number">
        {phone}
      </div>
      <div className="address">
        {address}
      </div>
      <div className="email">
        {email}
      </div>

      <Button className={styles['contact-card__edit-button']}>
        Редактировать
      </Button>
    </div>
  );
};

export default ContactCard;
