import React, { FC } from 'react';
import { ListGroup } from 'react-bootstrap';

interface PaginationProps {
  itemsPerPage: number;
  totalItem: number;
  paginate: (numberPage: number) => void;
}

const PaginationBasic: FC<PaginationProps> = ({ itemsPerPage, totalItem, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItem / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ListGroup as="ul">
      {pageNumbers.map((numberPage) => (
        <ListGroup.Item
          key={numberPage}
          onClick={() => paginate(numberPage)}
          style={{ cursor: 'pointer' }}
          as="li">
          Categories{numberPage}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default PaginationBasic;
