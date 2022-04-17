import React, { FC, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import { useParams, useNavigate } from 'react-router-dom';



interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = React.useState<IUser | null>(null);
    const {id} = useParams();
    const history = useNavigate();
    console.log(history);
    

    useEffect(()=> {
  fetchUser();

    }, [])
  
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data)
      } catch (error) {
        alert(error);
      }
    }

    return (
      <div>
      <button onClick={() => history('/user')}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
          {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
  </div>
    );
};

export default UserItemPage;