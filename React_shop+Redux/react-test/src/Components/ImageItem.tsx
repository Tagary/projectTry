import React, { FC } from 'react';
import { Figure, Spinner, Card, Button } from 'react-bootstrap';
import { PhotosItem } from '../pages/Galery';

interface ImageProps {
  items: PhotosItem[];
  loading: boolean;
}

const ImageItem: FC<ImageProps> = ({ items, loading }) => {
  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <div className="d-flex justify-content-around flex-wrap mb-3">
      {items.map((item) => (
        <Card className="mx-3 mb-3 " style={{ width: '12rem' }}>
          <Card.Img variant="top" src={item.thumbnailUrl} />
          <Card.Body>
            <Card.Title>{item.id}</Card.Title>
            <Card.Text>{item.title}</Card.Text>
            <Button variant="primary">Подробности</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ImageItem;
