import React from 'react';
import {
  DirectoryContr,
  PersonalData,
  NewsEditor,
  UserControl,
  OrganisationStructur,
  NewNewsModal,
  NewsEditorModal,
} from '../components/admin';
import { useTypedSelector } from '../redux/hooks/useTypedSelector';

function PersonalDataPageAdmin() {
  const { modal, modalEditor } = useTypedSelector((state) => state.news);
  return (
    <>
      {modal && <NewNewsModal />}
      {modalEditor && <NewsEditorModal/>}
      <div className="header">
        <div className="header__bottomSide"></div>
      </div>
      <div className="main">
        <nav className="main__title">Личный кабинет системного администратора</nav>

        <div className="main__box">
          <PersonalData />
          <NewsEditor />
          <DirectoryContr />
          <UserControl />
          <OrganisationStructur />
        </div>
      </div>
      <footer className="footer">
        <div className="footer__author"></div>
        <div className="footer__someInformation"></div>
      </footer>
    </>
  );
}

export default PersonalDataPageAdmin;
