import './App.css';
import axios from 'axios';

function App() {
  let params = {
    actionName: 'MessagesLoad',
  };

  const resp = axios.post('http://f0665380.xsph.ru/', params);
  console.log(resp);
  return (
    <div className="wrapper">
      <div className="container">
        <div className="top__comment">
          <div className="left__commentblock">
            <img className="avatar" src="./images/commentPhoto/photo.jpg" alt="ava" />
            <div className="nameuser">Nina Malofeeva</div>
          </div>
          <div className="right__commentblock">
            <div className="right__commentblock-position">
              <div className="postion__how">Левый</div>
              <div className="postion__how">Центр</div>
              <div className="postion__how">Правый</div>
            </div>
            <div className="right__commentblock-icons">
              <img src="./images/icons/redirectMessage.svg" alt="" />
              <img src="./images/icons/hideMessage.svg" alt="" />
              <img src="./images/icons/settings.svg" alt="" />
              <img src="./images/icons/favorite.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="middle__comment">
          <div className="left__commentblock">
            <div>time</div>
            <div>
              "Россия 1" не боится снимать сериалы о сложных и неоднозначных периодах в истории
              нашей страны. Это и "В круге первом", и "Жизнь и судьба", и "Зулейха". Идёт работа над
              "Одним днём Ивана Денисовича". Вопрос Антону Златопольскому -почему вы считаете{' '}
            </div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
        <div className="bot__comment">
          <div className="bot__comment-tagsactive"></div>
          <div className="bot__comment-tags"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
