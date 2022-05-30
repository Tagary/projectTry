import React from 'react';
import { useActions } from '../../redux/hooks/useActions';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import edit from '../../assets/images/editnews.svg';
import basketblue from '../../assets/images/basketblue.svg';

function NewsEditor() {
  const { oneNews } = useTypedSelector((state) => state.news);

  const [hiddeCont, setHideCont] = React.useState<boolean>(true);

  const now = new Date();
  const nowDay = `${now.getDate()}.${now.getMonth() + 1 }.${now.getFullYear()}`

  const { OpenModal, DeleteNews, OpenModalEditor } = useActions();


  const handleShowContent = () => {
    setHideCont(!hiddeCont);
  }

  React.useEffect(() => {

  }, [hiddeCont])

  const editNews = (inde: number) => {

    
    OpenModalEditor(inde);
  }

  const deletNews = (dataid: number) => {
    const informationDelete = window.confirm('Вы дествительно хотите удалить новость'); 
    if(informationDelete) {
      let oneNewsDel = oneNews.filter((news) => {
        return news.id !== dataid;
      });
      console.log(oneNewsDel);
      
  
      DeleteNews(oneNewsDel);
    }
  };

  return (
    <div className="box">
      <div className="box__topSide">
        <div className="topSide__title">Редактирование новостей</div>

        <div className="topSide__change" onClick={() => OpenModal()}>
          Создать новость
        </div>
      </div>
      <div className="box__newsManagement">
        {oneNews.map((data, inde) => (
          
          
          <div key={data.id} className={ hiddeCont && inde > 3 ? 'newsManagement__wrapper hidden__news' : 'newsManagement__wrapper'}>

            <div className="newsManagement__image">
              <img className="img__newswidth" src={data.image} alt="" />
            </div>
            <div className="newsManagement__underImage">
              <div className="newsManagement__description">
                <div className="newsManagement__date">{data.article} {nowDay}</div>
                <div className="newsManagement__text">{data.text}</div>
              </div>
              <div className="newsManagement__changeDelete">
                <div className="keynews__edit">
                  <img onClick={() => editNews(inde)} className="editnews__pincell" src={edit} alt="" />
                  <img onClick={() => deletNews(data.id)} src={basketblue} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="box__footer" onClick={handleShowContent}>{hiddeCont ? 'Показать все новости': 'Скрыть все новости'}</div>
    </div>
  );
}

export default NewsEditor;
