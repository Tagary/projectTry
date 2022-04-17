import React from 'react';
import { Pagination } from 'react-bootstrap';

function PaginationBasic() {
  // const [pagination, setPagination] = useState(second);

  let active: number = 1;
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Pagination>
      <Pagination.Prev />
      {items}
      <Pagination.Next />
    </Pagination>
  );
}

export default PaginationBasic;
