import './CommonModalWindow.scss';
import { closeModalCommon } from '../../store/reducers/commonModalWindowSlice';
import { useDispatch } from 'react-redux';
import React, { ReactNode } from 'react';
import iconClose from './assets/iconX.svg';

interface CommonModalWindowProps {
  visible: boolean;
  children?: ReactNode;
}

const CommonModalWindow = (props: CommonModalWindowProps) => {
  const dispatch = useDispatch();

  return (
    <div className={props.visible ? 'common-modal active' : 'common-modal'}>
      <div className="common-modal-content">
        <button className="icon-close" onClick={() => dispatch(closeModalCommon())}>
          <img src={iconClose} alt="iconClose" />
        </button>
        <div className="modal-info">
          {React.Children.map(props.children, (item) => (
            <>{item}</>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonModalWindow;
