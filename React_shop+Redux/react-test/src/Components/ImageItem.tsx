import React, { useEffect } from 'react';
import { Spinner, Card, Button } from 'react-bootstrap';
import { useTypedSelector } from '../redux/hooks/useTypedSelector';
import { useActions } from './../redux/hooks/useActions';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ImageItem: React.FC = () => {
  const { page, error, loading, images, limit } = useTypedSelector((state) => state.image);
  const { fetchImages, setImagePage, getMoreInfo } = useActions();
  const pages = [1, 2, 3, 4];
  useEffect(() => {
    fetchImages(page, limit);
  }, [page]);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <ListGroup as="ul">
        {pages.map((p, index) => (
          <ListGroup.Item
            key={index}
            onClick={() => setImagePage(p)}
            style={{ cursor: 'pointer' }}
            as="li">
            Categories{p}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="d-flex justify-content-around flex-wrap mb-3">
        {images.map((image) => (
          <Card key={image.id} className="mx-3 mb-3 " style={{ width: '12rem' }}>
            <Link to="/ImgDetail">
              <div title="Подробности о картинке">
                <Card.Img
                  onClick={() => getMoreInfo(image)}
                  variant="top"
                  src={image.thumbnailUrl}
                />
              </div>
            </Link>
            <Card.Body>
              <Link to="/ImgDetail">
                <div title="Подробности о картинке">
                  <Button onClick={() => getMoreInfo(image)} variant="primary">
                    Подробности
                  </Button>
                </div>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ImageItem;
