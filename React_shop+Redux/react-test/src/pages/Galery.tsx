import axios from 'axios';
import React, { useEffect } from 'react';
import { Figure } from 'react-bootstrap';
import PaginationBasic from '../Components/PaginationBasic';

interface PhotosItem {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function Galery() {
  const maxLength: number = 24;
  const [items, setItems] = React.useState<PhotosItem[]>([]);

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/?_limit=${maxLength}`)
      .then((response) => setItems(response.data));
  }, []);

  return (
    <>
      {items.map((item) => (
        <Figure>
          <Figure.Image alt="150x150" src={item.thumbnailUrl} />
          <Figure.Caption>{item.title}</Figure.Caption>
        </Figure>
      ))}

      <PaginationBasic />
    </>
  );
}

export default Galery;
