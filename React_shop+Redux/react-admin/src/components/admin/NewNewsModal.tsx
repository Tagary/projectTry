import React from 'react';
import { useActions } from '../../redux/hooks/useActions';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';

function NewNewsModal() {
  const { oneNews } = useTypedSelector((state) => state.news);
  const { CloseModal, NewsAdd } = useActions();
  const [newsArticle, setNewsArticle] = React.useState('');
  const [newsText, setNewsText] = React.useState('');
  const [newsImage, setNewsImage] = React.useState('');

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
    const target = e.target as HTMLInputElement;
    setNewsImage(URL.createObjectURL(target.files[0]));
    console.log(newsImage);
  };

  const handlerSave = () => {
    oneNews.push({
      article: newsArticle,
      image: newsImage,
      text: newsText,
    });

    NewsAdd(oneNews);
    CloseModal();
  };

  return (
    <div>
      <div className="container__modal">
        <div className="article__createnews">Создать новость</div>
        <div className="modal__article">
          <div className="modal__paragraph">Тема</div>
          <input onChange={handlerInputArticle} type="text" placeholder="Введите текст" />
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
            onChange={handlerInputText}></textarea>
        </div>
        <div className="input__imagesnews">
          <div className="modal__paragraph">Ссылка</div>
          <input type="url" placeholder="Ввставьте ссылку" onChange={handleImageNewsUrl} />
          <div className="loading__images">
            <input
              onChange={handlerImageNews}
              className="add__filenews"
              type="file"
              accept="image/jpg"
            />
            <img src="/images/svg/uploade.svg" alt="" />
            <div className="ulpload__images">Загрузить изображение</div>
          </div>
        </div>
        <div className="button__save">
          <button className="save__news" onClick={handlerSave}>
            Сохранить
          </button>
          <button className="cancel__news" onClick={() => CloseModal()}>
            Отмена
          </button>
        </div>
      </div>
      <div className="overlay" onClick={() => CloseModal()}></div>
    </div>
  );
}

export default NewNewsModal;
