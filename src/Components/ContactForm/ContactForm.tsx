import React, {FC} from 'react';
import {IModal} from "../../utills/interfaceses";
import {createPortal} from "react-dom";

interface IContactFormProps extends IModal {

}

const ContactForm: FC<IContactFormProps> = ({
  isOpen,
  toggleModal
  }) => {
  return (
    <>
      {isOpen && createPortal(
        <></>,
        document.body
      )}
    </>
  );
};

export default ContactForm;
