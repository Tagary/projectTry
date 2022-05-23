import React from 'react';
import './App.css';
import { userSlice } from './store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { featchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';

function App() {
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  // const dispatch = useAppDispatch();


  // React.useEffect(() => {
  //   dispatch(featchUsers())
  // }, [])
  
  return (
    <div className="App">
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {
        JSON.stringify(users, null, 2)
      } */}
      <PostContainer/>
    </div>
  );
}

export default App;
