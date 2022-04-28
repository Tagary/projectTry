import React from 'react';

function UserControl() {
  const admin = true;
  return (
    <div className="box">
      <div className="box__userManage">
        <div className="box__titleanother-nborder">
          <div className="topSide__title">Управление пользователями</div>
          <div></div>
        </div>
        <div className="box__userManageUndertitle">
          <div className="box__leftUsers">
            <div className="userManagment__choose">Администраторы POV</div>
            <div className="userManagment__choose">Управление ФОИВ</div>
            <div className="userManagment__choose">Управление POV</div>
          </div>
          {admin && <div className="topSide__change">Добавить пользователя</div>}
        </div>
        <div className="box__containerUsermanagment">
          <div className="userManagment__input">
            <input type="text" className="search__input" placeholder="ФИО+email" />
            <div className="userManagment__search">Поиск</div>
          </div>
          <div className="userManagment__table">
            <div className="userManagment__table-flexibility">
              <div className="userManagment__column">№</div>
              <div className="userManagment__column">ФИО</div>
              <div className="userManagment__column">Департамент</div>
              <div className="userManagment__column">Телефон</div>
              <div className="userManagment__column">Почта</div>
              <div className="userManagment__column">Пароль</div>
              <div className="userManagment__column">Действия</div>
            </div>
            <div className="userManagment__table-data">
              <div className="userManagment__column">№</div>
              <div className="userManagment__column">ФИО</div>
              <div className="userManagment__column">Департамент</div>
              <div className="userManagment__column">Телефон</div>
              <div className="userManagment__column">Почта</div>
              <div className="userManagment__column">Пароль</div>
              <div className="userManagment__column">Действия</div>
            </div>
            <div className="userManagment__pagination">
              <div className="userManagment__pagination-Arr">
                <img src="/images/svg/arrow-left.svg" alt="" />
              </div>
              <div className="userManagment__pagination-number">1</div>
              <div className="userManagment__pagination-Arr">
                <img src="/images/svg/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserControl;
