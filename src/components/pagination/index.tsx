import React from 'react';

import Button from '../button';

import './index.scss';

interface Props {
  totalItems: number,
  currentPage: number,
  itemsPerPage: number,
  onPageButtonClick: (newCurrentPage: number) => void,
}

const Pagination = (props: Props) => {
  const renderPageButtons = ({ totalItems, currentPage, itemsPerPage, onPageButtonClick }: Props): Array<JSX.Element> => {
    let buttons: Array<JSX.Element> = [];
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      buttons.push((
        <Button
          key={i}
          onClick={() => { onPageButtonClick(i); }}
          className={`pagination-button ${i === currentPage ? 'current' : ''}`}
        >
          {i}
        </Button>
      ));
    }
  
    return buttons;
  }

  return (
    <div className="pagination-root">
      {
        renderPageButtons(props)
      }
    </div>
  );
};

export default Pagination;