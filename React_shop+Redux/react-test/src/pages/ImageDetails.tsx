import React from 'react';
import { Link } from 'react-router-dom';
import ImageInfo from '../Components/ImageInfo';

interface ImageProps {}

function ImageDetails() {
  return (
    <div>
      <ImageInfo />

      <Link to="/">
        <div>Назад</div>
      </Link>
    </div>
  );
}

export default ImageDetails;
