import React from 'react';

function PersonalData() {

  return (
    <div className="box">
      <div className='box__topSide' >
        <div className="topSide__title">Персональные данные</div>

          <div className="topSide__change">
            <img className="try__tochange" src="/images/svg/editor.svg" alt="" />
            Редактировать
          </div>
        
      </div>
      <div className="box__personalData">
        {true?(<div className='personalData__photo editphoto'>
          <input className='add__file' type="file" accept='image/jpg'  /> 
        </div>) : (<div className='personalData__photo'>
          <div className="download__photo">Загрузите фото</div>
        </div>) }
        <div className="personalData__nameMail">
          <div className="nameMail__content">
            <div className="nameMail__whatText">ФИО</div>
            {<div className="nameMail__text">Василий Иван Романович</div>}
          </div>
          <div className="nameMail__content">
            <div className="nameMail__whatText">Email</div>
            {<div className="nameMail__text">vas@gmail.org</div>}
          </div>
        </div>
        
      </div>
    {true && <button className='save__personal'>Сохранить</button>}
    </div>
  );
}

export default PersonalData;
