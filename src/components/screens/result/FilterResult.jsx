import React from 'react';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import FilterItem from './FilterItem';
import { Button, Collapse } from '@mui/material';
import { useStore } from '@/hooks';

const FilterResult = () => {
  const { filterSearchActive, setFilterSearchActive, handleChange } =
    useStore();
  const uploadDate = [
    'Last hour',
    'Today',
    'This week',
    'This month',
    'This year',
  ];
  const type = ['Video', 'Channel', 'Playlist', 'Moive'];
  const duration = ['Under 4 minutes', '4-20 minutes', 'Over 20 minutes'];
  const features = [
    'Live',
    '4K',
    'HD',
    'Subtitles/CC',
    'Creative Commons',
    '360',
    'VR180',
    '3D',
    'HDR',
    'Location',
    'Purchased',
  ];
  const sortBy = ['Relevance', 'Upload date', 'View count', 'Rating'];
  return (
    <div className="filter-result">
      <div className="filter-result__top">
        <Button
          style={{ color: 'black' }}
          startIcon={<FormatLineSpacingIcon />}
          onClick={() =>
            handleChange(filterSearchActive, setFilterSearchActive)
          }>
          Filters
        </Button>
      </div>
      <Collapse in={filterSearchActive}>
        <div className="filter-result__wrapper">
          <FilterItem title="UPLOAD DATE" list={uploadDate} />
          <FilterItem title="TYPE" list={type} />
          <FilterItem title="DURATION" list={duration} />
          <FilterItem title="FEATURES" list={features} />
          <FilterItem title="SORT BY" list={sortBy} />
        </div>
      </Collapse>
    </div>
  );
};

export default FilterResult;
