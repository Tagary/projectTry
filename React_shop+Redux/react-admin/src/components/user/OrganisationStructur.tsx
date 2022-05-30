import React from 'react';

import downArrow from '../../assets/images/down__arrow.svg';

function OrganisationStructur() {

  return (
    <div className="box">
      <div className="box__organisation">
        <div className="topSide__title">Организационная-штатная структура ФОИВ</div>
      </div>
      <div className="box__organisationall">
        <div className="organisation__staff ">
          <ul className="organisation__staff__container first__ul">
            <li className="organistaion__staff__group">1.</li>
            <li className="organistaion__staff__depatment border__staff">
              Департамент информатизации <img src={downArrow} alt="" />
            </li>
            <li className="organistaion__staff__position border__staff">
              Руководитель департамента <img src={downArrow} alt="" />
            </li>
            <li className="organistaion__staff__name border__staff">
              Иванов И.И <img src={downArrow} alt="" />
            </li>
          </ul>
          <div className="organisation__staff ">
            <ul className="organisation__staff__container second__ul">
              <li className="organistaion__staff__group">1.1</li>
              <li className="organistaion__staff__position border__staff">
                Начальник отдела физиков <img src={downArrow} alt="" />
              </li>
              <li className="organistaion__staff__name border__staff">
                Петров П.П <img src={downArrow} alt="" />
              </li>

            </ul>
            <div className="organisation__staff ">
              <ul className="organisation__staff__container third__ul">
                <li className="organistaion__staff__group">1.1.1</li>
                <li className="organistaion__staff__position border__staff">
                  Финансист <img src={downArrow} alt="" />
                </li>
                <li className="organistaion__staff__name border__staff">
                  Сидоров С.С <img src={downArrow} alt="" />
                </li>

              </ul>
              <ul className="organisation__staff__container third__ul">
                <li className="organistaion__staff__group">1.1.2</li>
                <li className="organistaion__staff__position border__staff">
                  Аналитик <img src={downArrow} alt="" />
                </li>
                <li className="organistaion__staff__name border__staff">
                  Кириллов К.К <img src={downArrow} alt="" />
                </li>

              </ul>
            </div>
          </div>
          <div className="organisation__staff">
            <ul className="organisation__staff__container second__ul">
              <li className="organistaion__staff__group">1.2</li>
              <li className="organistaion__staff__position border__staff">
                Руководитель департамента <img src={downArrow} alt="" />
              </li>
              <li className="organistaion__staff__name border__staff">
                Иванов И.И <img src={downArrow} alt="" />
              </li>

            </ul>
          </div>
        </div>
        <div className="organisation__staff">
          <ul className="organisation__staff__container first__ul">
            <li className="organistaion__staff__group">2.</li>
            <li className="organistaion__staff__depatment border__staff">
              Департамент управления <img src={downArrow} alt="" />
            </li>
            <li className="organistaion__staff__position border__staff">
              Должность <img src={downArrow} alt="" />
            </li>
            <li className="organistaion__staff__name border__staff">
              Сотрудник <img src={downArrow} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrganisationStructur;
