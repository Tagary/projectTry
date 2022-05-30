import React from 'react';
import {
  DirectoryContr,
  PersonalData,
  NewsEditor,
  UserControl,
  OrganisationStructur,
} from '../components/user';

function PersonalDataPageAdmin() {
  return (
    <>
      <div className="header">
        <div className="header__bottomSide"></div>
      </div>
      <div className="main">

          <nav className="main__title">Личный кабинет</nav>

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
