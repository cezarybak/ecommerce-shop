import avatarImage from 'assets/avatar.png';
import { useAuth } from 'hooks';
import { useCickOutSide } from 'hooks/useClickOutSide';
import { useState } from 'react';

import './style.scss';

export const Avatar = () => {
  const [isModal, setModal] = useState<number | boolean>(false);
  const { user, removeLocalData } = useAuth();
  const { ref } = useCickOutSide(isModal, setModal);

  return (
    <div ref={ref} className="avatar">
      <img
        onClick={() => setModal((prev) => !prev)}
        src={user?.avatar || avatarImage}
        alt="avatar-image"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = avatarImage;
        }}
      />
      {isModal && (
        <div className="modal-avatar" onClick={() => removeLocalData()}>
          Logout
        </div>
      )}
    </div>
  );
};
