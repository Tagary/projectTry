import React from 'react';

function NewsEditor() {

  return (
    <div className="box">
      <div className='box__topSide' >

          <div  className="topSide__title">Редактирование новостей</div>

<div className="topSide__change">Создать новость</div>
      </div>
      <div className="box__newsManagement">
        <div className="newsManagement__wrapper">
          <div className="newsManagement__image">
            <img src="" alt="" />
          </div>
          <div className="newsManagement__underImage">
            <div className="newsManagement__description">
              <div className="newsManagement__date">data</div>
              <div className="newsManagement__text">описание</div>
            </div>
 <div className="newsManagement__changeDelete">кнопки</div>
          </div>
        </div>
        <div className="newsManagement__wrapper">
          <div className="newsManagement__image">
            <img src="" alt="" />
          </div>
          <div className="newsManagement__underImage">
            <div className="newsManagement__description">
              <div className="newsManagement__date">data</div>
              <div className="newsManagement__text">описание</div>
            </div>
<div className="newsManagement__changeDelete">кнопки</div>
          </div>
        </div>
        <div className="newsManagement__wrapper">
          <div className="newsManagement__image">
            <img src="" alt="" />
          </div>
          <div className="newsManagement__underImage">
            <div className="newsManagement__description">
              <div className="newsManagement__date">data</div>
              <div className="newsManagement__text">описание</div>
            </div>
<div className="newsManagement__changeDelete">кнопки</div>
          </div>
        </div>
      </div>
      <div className="box__footer">Показать все новости</div>
    </div>
  );
}

export default NewsEditor;
