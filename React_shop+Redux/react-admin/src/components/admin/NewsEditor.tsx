import React from 'react';
import { useActions } from '../../redux/hooks/useActions';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';

function NewsEditor() {
  const { oneNews } = useTypedSelector((state) => state.news);

  const { OpenModal } = useActions();
  return (
    <div className="box">
      <div className="box__topSide">
        <div className="topSide__title">Редактирование новостей</div>

        <div className="topSide__change" onClick={() => OpenModal()}>
          Создать новость
        </div>
      </div>
      <div className="box__newsManagement">
        {oneNews.map((data) => (
          <div className="newsManagement__wrapper">
            <div className="newsManagement__image">
              <img className="img__newswidth" src={data.image} alt="" />
            </div>
            <div className="newsManagement__underImage">
              <div className="newsManagement__description">
                <div className="newsManagement__date">{data.article}</div>
                <div className="newsManagement__text">{data.text}</div>
              </div>
              <div className="newsManagement__changeDelete">
                <div className="keynews__edit">
                  <img className="editnews__pincell" src="/images/svg/editnews.svg" alt="" />
                  <img src="/images/svg/basketblue.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="box__footer">Показать все новости</div>
    </div>
  );
}

export default NewsEditor;
