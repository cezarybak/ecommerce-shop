import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export const useCickOutSide = (
  isModal: boolean | number,
  setModal: Dispatch<SetStateAction<boolean | number>>,
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isModal && ref.current && !ref.current.contains(e.target)) {
        setModal(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isModal, setModal]);

  return {
    ref,
  };
};
