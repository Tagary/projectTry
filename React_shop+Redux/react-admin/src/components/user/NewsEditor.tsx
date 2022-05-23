import React from 'react';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';

function NewsEditor() {
  const { oneNews } = useTypedSelector((state) => state.news);

  return (
    <div className="box">
      <div className='box__topSide user'>

          <div className="topSide__title">Новости</div>
      </div>
      <div className="box__newsManagement">
      {oneNews.map((data) => (
          <div key={data.id} className="newsManagement__wrapper">
            <div className="newsManagement__image">
              <img className="img__newswidth" src={data.image} alt="" />
            </div>
            <div className="newsManagement__underImage">
              <div className="newsManagement__description">
                <div className="newsManagement__date">{data.article}</div>
                <div className="newsManagement__text">{data.text}</div>
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
