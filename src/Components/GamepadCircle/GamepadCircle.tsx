import {IModal} from "../../utills/interfaceses";
import {FC} from "react";
import {createPortal} from "react-dom";

interface IGamepadCircleProps extends IModal {

}

const GamepadCircle: FC<IGamepadCircleProps> = ({
  isOpen,
  toggleModal
  }) => {

  const handleImportData = () => {}
  const handleExportData = () => {}
  const handleAddContact = () => {}
  const handleEditContacts = () => {}


  return (
    <>
      {isOpen && createPortal(
        <div>это модалка геймпад</div>,
        document.body
      )}
    </>
  );
};

export default GamepadCircle;
