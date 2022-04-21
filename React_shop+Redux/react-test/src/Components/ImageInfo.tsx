import React from 'react';
import { Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/esm/Card';
import { useActions } from '../redux/hooks/useActions';
import { useTypedSelector } from '../redux/hooks/useTypedSelector';

const ImageInfo: React.FC = () => {
  const { oneImage, loading } = useTypedSelector((state) => state.image);
  const { fakeLoading } = useActions();

  React.useEffect(() => {
    setTimeout(() => {
      fakeLoading();
    }, 500);
  }, []);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  console.log(oneImage);
  return (
    <div className="d-flex justify-content-center mb-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={oneImage.url} />
        <Card.Body>
          <Card.Title>{oneImage.id}</Card.Title>
          <Card.Text>{oneImage.title}</Card.Text>
        </Card.Body>
      </Card>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ImageInfo;
