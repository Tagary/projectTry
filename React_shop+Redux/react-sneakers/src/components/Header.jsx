import React from 'react';
import { Link } from 'react-router-dom';

function Header({ onClickCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img alt="" width={40} height={40} src="/img/image_4.png" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кросовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex aligh__center">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img width={18} height={18} alt="" src="/img/cart.svg" />
          <span>1205 руб.</span>
        </li>

        <li>
          <Link to="/favorites">
            <img className="mr-20 cu-p" width={18} height={18} alt="" src="/img/like.svg" />
          </Link>
        </li>

        <li>
          <img width={18} height={18} alt="" src="/img/user.svg" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
