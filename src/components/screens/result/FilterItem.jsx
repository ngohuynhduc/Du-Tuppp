import React, { Fragment } from 'react';

const FilterItem = ({ title, list }) => {
  return (
    <div className="filter-item">
      <div className="filter-item__title">{title}</div>
      <div className="filter-item__list">
        {list.map((item, index) => (
          <Fragment key={index}>
            <div className="filter-item__list__content">{item}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default FilterItem;
