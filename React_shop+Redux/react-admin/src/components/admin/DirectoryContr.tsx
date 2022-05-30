import React from 'react';
import { useActions } from '../../redux/hooks/useActions';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';

function DirectoryContr() {
  const { massiveDirectory } = useTypedSelector((state) => state.directory);
  
  const { CloseModal, NewsAdd } = useActions();
  console.log(massiveDirectory);
  
  return (
    <div className="box">
      <div className="box__titleanother">
        <div className="topSide__title">Управление справочниками</div>
        <div></div>
      </div>
      <div className="box__directoriesManagment">
      {massiveDirectory.map(directoryItem => 
                <div className="box__directoriesManagmentbox">
                <div>
                  <div className="directory">Справочник </div>
                  <div className="options__direct">{directoryItem.extensionDirectory ? 'Расширяемый' : 'Нерасширяемый'}</div>
                </div>
                <div className="check__directory">Посмотреть</div>
              </div>
      )}



        

      </div>
      <div className="box__footer">Показать все справочники</div>
    </div>
  );
}

export default DirectoryContr;
