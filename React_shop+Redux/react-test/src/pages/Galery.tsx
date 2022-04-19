import axios from 'axios';
import React from 'react';
import ImageItem from '../Components/ImageItem';
import PaginationBasic from '../Components/PaginationBasic';

export interface PhotosItem {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function Galery() {
  const maxLength: number = 24;
  const [items, setItems] = React.useState<PhotosItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [itemsPerPage] = React.useState<number>(6);

  React.useEffect(() => {
    const fetchIMG = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/?_limit=${maxLength}`,
      );
      setItems(response.data);
      setLoading(false);
    };
    fetchIMG();
  }, []);

  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentPosts = items.slice(indexOfFirstImage, indexOfLastImage);

  const handlerPaginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="d-flex ">
      <PaginationBasic
        totalItem={items.length}
        itemsPerPage={itemsPerPage}
        paginate={handlerPaginate}
      />
      <ImageItem items={currentPosts} loading={loading} />
    </div>
  );
}

export default Galery;
