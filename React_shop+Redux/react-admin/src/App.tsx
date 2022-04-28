import React from 'react';
import Login from './components/user/Login';

import './css/style.css';
import PersonalDataPage from './pages/PersonalDataPage';
import PersonalDataPageAdmin from './pages/PersonalDataPageAdmin';
import { useTypedSelector } from './redux/hooks/useTypedSelector';

function App() {
  const {admin, login} =useTypedSelector(state => state.login);
  console.log(login);
  

  return (
    <div className="wrapper">
            {login ? (admin? <PersonalDataPageAdmin /> : <PersonalDataPage/> ) : (<Login/>) }
            

    </div>
  );
}

export default App;
