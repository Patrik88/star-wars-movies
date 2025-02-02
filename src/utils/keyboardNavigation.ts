import { KeyboardEvent } from 'react';

export const handleKeyboardNavigation = (
  e: KeyboardEvent,
  handlePrev: () => void,
  handleNext: () => void
) => {
  if (e.key === 'ArrowLeft') {
    handlePrev();
  } else if (e.key === 'ArrowRight') {
    handleNext();
  }
}; 