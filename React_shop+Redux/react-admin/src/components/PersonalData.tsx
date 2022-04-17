import React from 'react';

function PersonalData() {
  return (
    <div className="box">
      <div className="box__topSide">
        <div className="topSide__title">Персональные данные</div>
        <div className="topSide__change">Редактировать</div>
      </div>
      <div className="box__personalData">
        <div className="personalData__photo">
          <div className="download__photo">загрузите фото</div>
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
