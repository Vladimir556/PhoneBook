import { useCallback, useState } from 'react';

type UseModalReturnType = [
  isOpen: boolean,
  toggleModal: () => void,
  closeModal: () => void,
  openModal: () => void,
]

export default function useModal(): UseModalReturnType {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  return [ isOpen, toggleModal, openModal, closeModal ];
}
