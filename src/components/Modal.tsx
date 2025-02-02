import React from 'react';
import { useModal } from '../hooks/useModal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const { dialogRef, handleBackdropClick } = useModal(isOpen, onClose);

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      {children}
    </dialog>
  );
}; 