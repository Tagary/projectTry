import React from 'react';
import { useActions } from '../../redux/hooks/useActions';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
// import upload from '../../assets/images/uploade.svg';

function NewsEditorModal() {
  const { oneNews, index } = useTypedSelector((state) => state.news);
  const { CloseModalEditor, NewsEdit } = useActions();
  const [newsArticle, setNewsArticle] = React.useState(oneNews[index].article);
  const [newsText, setNewsText] = React.useState(oneNews[index].text);
  const [newsImage, setNewsImage] = React.useState<null | string | undefined>(oneNews[index].image);
  const [idNews, setNewsId] = React.useState<number>(oneNews[index].id);



  const handlerInputArticle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsArticle(e.target.value);
  };
  const handlerInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewsText(e.target.value);
  };

  const handleImageNewsUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsImage(e.target.value);
  };

  const handlerImageNews = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader;
    if (e.target.files && e.target.files[0]) {
      reader = new FileReader();
      reader.onload = function (e) {
        setNewsImage(e.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handlerSave = () => {
    const objectEdit = {
        id: idNews,
        article: newsArticle,
        image: newsImage || '',
        text: newsText,
      date: oneNews[index].date,
    }

    oneNews.splice(index,index, objectEdit);


    NewsEdit(oneNews);

    CloseModalEditor();
  };

  return (
    <div>
      <div className="container__modal">
        <div className="article__createnews">Редактировать новость</div>
        <div className="modal__article">
          <div className="modal__paragraph">Тема</div>
          <input onChange={handlerInputArticle} value={newsArticle} type="text" placeholder="Введите текст" />
        </div>
        <div className="text__areain">
          <div className="modal__paragraph">Текст</div>
          <textarea
            placeholder="Введите текст"
            className="text__areainput"
            name=""
            id=""
            cols={30}
            rows={10}
            onChange={handlerInputText} value={newsText}></textarea>
        </div>
        <div className="input__imagesnews">
          <div className="modal__paragraph">Ссылка</div>
          <input type="url" placeholder="Ввставьте ссылку"  onChange={handleImageNewsUrl} />
          <div className="loading__images">
            <input
              onChange={handlerImageNews}
              className="add__filenews"
              
              type="file"
              accept="image/jpg"
            />
            <img src='uploade.svg' alt="" />
            <div className="ulpload__images">Загрузить изображение</div>
          </div>
        </div>
        <div className="button__save">
          {newsImage && newsArticle && newsText ? (
            <button className="save__news" onClick={handlerSave}>
              Сохранить
            </button>
          ) : (
            <button disabled className="save__news" onClick={handlerSave}>
              Сохранить
            </button>
          )}
          <button className="cancel__news" onClick={() => CloseModalEditor()}>
            Отмена
          </button>
        </div>
      </div>
      
      <div className="overlay" onClick={() => CloseModalEditor()}></div>
    </div>
  );
}

export default NewsEditorModal;
