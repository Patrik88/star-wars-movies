import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Prevent background scrolling when the modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      // Show the modal and set focus for accessibility
      dialogRef.current.showModal();
      dialogRef.current.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    // Close the modal if the backdrop is clicked (outside the content)
    if (e.target === dialogRef.current) {
      handleClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleClick}
      // style={{
      //   padding: 0,
      //   border: 'none',
      //   borderRadius: '8px',
      //   maxWidth: '600px',
      //   width: '90%',
      //   position: 'fixed',
      //   top: '50%',
      //   left: '50%',
      //   transform: 'translate(-50%, -50%)'
      // }}
      aria-modal="true"
      role="dialog"
    >
      {children}
    </dialog>
  );
}; 