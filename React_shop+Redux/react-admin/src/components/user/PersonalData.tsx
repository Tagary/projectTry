import React from 'react';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';

function PersonalData() {
  const { edit, name, email, image } = useTypedSelector((state) => state.person);

  return (
    <div className="box">
      <div className='box__topSide user'>
        <div className="topSide__title">Персональные данные</div>
      </div>
      <div className="box__personalData">
      <div className="personalData__photo">

            <img className="photo__avatarperson" src={image} alt="" />
      </div>
        <div className="personalData__nameMail">
          <div className="nameMail__content">
            <div className="nameMail__whatText">ФИО</div>
            <div className="nameMail__text">{name}</div>
          </div>
          <div className="nameMail__content">
            <div className="nameMail__whatText">Email</div>
            <div className="nameMail__text">{email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalData;
