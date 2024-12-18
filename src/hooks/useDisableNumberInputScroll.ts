import { useEffect } from 'react';

// useDisableNumberInputScroll globally cancels the scroll event on number
// inputs to prevent accidentally changing the value when scrolling.
export const useDisableNumberInputScroll = () => {
  useEffect(() => {
    const handleWheel = () => {
      const el = document.activeElement as HTMLInputElement | null;
      if (el && el.type === 'number') {
        el.blur();

        // Restore focus after the scroll event has been processed.
        setTimeout(() => el.focus({ preventScroll: true }), 0);
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);
};
