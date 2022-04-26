import React from 'react';

function OrganisationStructur() {
  const admin = false;

  return (
    <div className="box">
      <div className="box__organisation">
        <div className="topSide__title">Организационная-штатная структура ФОИВ</div>
        {admin && <div className="topSide__change">Редактировать</div>}
      </div>
      <div className="box__organisationall">
        <div className="organisation__staff ">
          <ul className="organisation__staff__container first__ul">
            <li className="organistaion__staff__group">1.</li>
            <li className="organistaion__staff__depatment border__staff">
              Департамент информатизации <img src="/images/svg/down__arrow.svg" alt="" />
            </li>
            <li className="organistaion__staff__position border__staff">
              Руководитель департамента <img src="/images/svg/down__arrow.svg" alt="" />
            </li>
            <li className="organistaion__staff__name border__staff">
              Иванов И.И <img src="/images/svg/down__arrow.svg" alt="" />
            </li>
            {admin && (
              <li className="organistaion__staff__editor">
                <img src="/images/svg/editor.svg" alt="" />
              </li>
            )}
          </ul>
          <div className="organisation__staff ">
            <ul className="organisation__staff__container second__ul">
              <li className="organistaion__staff__group">1.1</li>
              <li className="organistaion__staff__position border__staff">
                Начальник отдела физиков <img src="/images/svg/down__arrow.svg" alt="" />
              </li>
              <li className="organistaion__staff__name border__staff">
                Петров П.П <img src="/images/svg/down__arrow.svg" alt="" />
              </li>
              {admin && (
                <li className="organistaion__staff__editor">
                  <img src="/images/svg/editor.svg" alt="" />
                </li>
              )}
              {admin && (
                <li className="organistaion__staff__editor">
                  <img src="/images/svg/crossblue.svg" alt="" />
                </li>
              )}
            </ul>
            <div className="organisation__staff ">
              <ul className="organisation__staff__container third__ul">
                <li className="organistaion__staff__group">1.1.1</li>
                <li className="organistaion__staff__position border__staff">
                  Финансист <img src="/images/svg/down__arrow.svg" alt="" />
                </li>
                <li className="organistaion__staff__name border__staff">
                  Сидоров С.С <img src="/images/svg/down__arrow.svg" alt="" />
                </li>
                {admin && (
                  <li className="organistaion__staff__editor">
                    <img src="/images/svg/editor.svg" alt="" />
                  </li>
                )}
                {admin && (
                  <li className="organistaion__staff__editor">
                    <img src="/images/svg/crossblue.svg" alt="" />
                  </li>
                )}
              </ul>
              <ul className="organisation__staff__container third__ul">
                <li className="organistaion__staff__group">1.1.2</li>
                <li className="organistaion__staff__position border__staff">
                  Аналитик <img src="/images/svg/down__arrow.svg" alt="" />
                </li>
                <li className="organistaion__staff__name border__staff">
                  Кириллов К.К <img src="/images/svg/down__arrow.svg" alt="" />
                </li>
                {admin && (
                  <li className="organistaion__staff__editor">
                    <img src="/images/svg/editor.svg" alt="" />
                  </li>
                )}
                {admin && (
                  <li className="organistaion__staff__editor">
                    <img src="/images/svg/crossblue.svg" alt="" />
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="organisation__staff">
            <ul className="organisation__staff__container second__ul">
              <li className="organistaion__staff__group">1.2</li>
              <li className="organistaion__staff__position border__staff">
                Руководитель департамента <img src="/images/svg/down__arrow.svg" alt="" />
              </li>
              <li className="organistaion__staff__name border__staff">
                Иванов И.И <img src="/images/svg/down__arrow.svg" alt="" />
              </li>
              {admin && (
                <li className="organistaion__staff__editor">
                  <img src="/images/svg/editor.svg" alt="" />
                </li>
              )}
              {admin && (
                <li className="organistaion__staff__editor">
                  <img src="/images/svg/crossblue.svg" alt="" />
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="organisation__staff">
          <ul className="organisation__staff__container first__ul">
            <li className="organistaion__staff__group">2.</li>
            <li className="organistaion__staff__depatment border__staff">
              Департамент управления <img src="/images/svg/down__arrow.svg" alt="" />
            </li>
            <li className="organistaion__staff__position border__staff">
              Должность <img src="/images/svg/down__arrow.svg" alt="" />
            </li>
            <li className="organistaion__staff__name border__staff">
              Сотрудник <img src="/images/svg/down__arrow.svg" alt="" />
            </li>
            {admin && (
              <li className="organistaion__staff__editor">
                <img src="/images/svg/editor.svg" alt="" />
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrganisationStructur;
