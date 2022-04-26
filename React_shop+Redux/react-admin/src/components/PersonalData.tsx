import React from 'react';

function PersonalData() {
  const admin = false;

  return (
    <div className="box">
      <div className={admin ? 'box__topSide' : 'box__topSide user'}>
        <div className="topSide__title">Персональные данные</div>
        {admin && (
          <div className="topSide__change">
            <img className="try__tochange" src="/images/svg/editor.svg" alt="" />
            Редактировать
          </div>
        )}
      </div>
      <div className="box__personalData">
        <div className="personalData__photo">
          <div className="download__photo">Загрузите фото</div>
          <img src="" alt="" />
        </div>
        <div className="personalData__nameMail">
          <div className="nameMail__content">
            <div className="nameMail__whatText">ФИО</div>
            <div className="nameMail__text">Василий Иван Романович</div>
          </div>
          <div className="nameMail__content">
            <div className="nameMail__whatText">Email</div>
            <div className="nameMail__text">vas@gmail.org</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalData;
