import axios from 'axios';
import React, { useEffect } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {

  return (


<div>
  
  <div>
    <NavLink to='/users'>Пользователи</NavLink>
    <NavLink to='/todos'>Список дел</NavLink>
  </div>
<Routes >
            <Route element={<UserPage/>} path={'/users'} />
            <Route element={<TodosPage/>} path={'/todos'} />
            <Route element={<UserItemPage/>} path={'/users/:id'} />
            <Route element={<TodoItemPage/>} path={'/todos/:id'} />
          </Routes>
</div>




  );
};

export default App;