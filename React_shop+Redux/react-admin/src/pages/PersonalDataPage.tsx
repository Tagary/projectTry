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

          <div className="main__title">Личный кабинет</div>

        <div className="main__box">
          <PersonalData />
          <NewsEditor />
          <DirectoryContr />
          <UserControl />
          <OrganisationStructur />
        </div>
      </div>
      <div className="footer">
        <div className="footer__author"></div>
        <div className="footer__someInformation"></div>
      </div>
    </>
  );
}

export default PersonalDataPageAdmin;
