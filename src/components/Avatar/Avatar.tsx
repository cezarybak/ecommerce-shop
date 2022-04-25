import avatarImage from 'assets/avatar.png';
import { useAuth } from 'hooks';

import './style.scss';
export const Avatar = () => {
  const { user } = useAuth();

  return (
    <div className="avatar">
      <img src={user?.avatar || avatarImage} alt="avatar-image" />
    </div>
  );
};
