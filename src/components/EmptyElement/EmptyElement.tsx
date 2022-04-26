import { ReactComponent as EmptyIcon } from 'assets/svgIcons/emptyIcon.svg';
import './style.scss';

export const EmptyElement = () => {
  return (
    <div className="empty-element">
      <EmptyIcon className="icon" />
      <div>
        <h2>Ooops… It’s empty here</h2>
        <span>There are no products on the list</span>
      </div>
    </div>
  );
};
