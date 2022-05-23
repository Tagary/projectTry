import React from 'react';
import { useActions } from '../../redux/hooks/useActions';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';

function PersonalData() {
  const { edit, name, email, image } = useTypedSelector((state) => state.person);
  const { Edit, ChangeName, ChangeEmail, ChangeImage } = useActions();

  const [images, setImages] = React.useState<string | undefined>(image);
  const [emaill, setEmail] = React.useState<string>(email);
  const [namee, setName] = React.useState<string>(name);

  React.useEffect(() => {}, [images]);

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setImages(URL.createObjectURL(target.files[0]));
    ChangeImage(images);
  };

  const handlerChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlerChangeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlerEdit = () => {
    Edit();
  };

  const handelSave = () => {
    ChangeName(namee);
    ChangeEmail(emaill);
    ChangeImage(images);
    Edit();
  };

  return (
    <div className="box">
      <div className="box__topSide">
        <div className="topSide__title">Персональные данные</div>

        {!edit && (
          <div onClick={handlerEdit} className="topSide__change">
            <img className="try__tochange" src="/images/svg/editor.svg" alt="" />
            Редактировать
          </div>
        )}
      </div>
      <div className="box__personalData">
        {edit ? (
          <div className="personalData__photo editphoto">
            <input
              onChange={handlerOnChange}
              className="add__file"
              type="file"
              accept="image/jpg"
            />
            <img className="photo__avatarperson" src={image} alt="" />
          </div>
        ) : (
          <div className="personalData__photo">
            <img className="photo__avatarperson" src={image} alt="" />
            <div className="download__photo">Загрузите фото</div>
          </div>
        )}
        <div className="personalData__nameMail">
          <div className="nameMail__content">
            <div className="nameMail__whatText">ФИО</div>
            {edit ? (
              <input type="text" onChange={handlerChangeName} defaultValue={name} />
            ) : (
              <div className="nameMail__text">{name}</div>
            )}
          </div>
          <div className="nameMail__content">
            <div className="nameMail__whatText">Email</div>
            {edit ? (
              <input onChange={handlerChangeMail} defaultValue={email} type="email" />
            ) : (
              <div className="nameMail__text">{email}</div>
            )}
          </div>
        </div>
      </div>
      {edit && (
        <button className="save__personal" onClick={handelSave}>
          Сохранить
        </button>
      )}
    </div>
  );
}

export default PersonalData;
