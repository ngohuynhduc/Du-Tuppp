import React, { useRef, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useStore } from '@/hooks';

const FilterBar = () => {
  const listBar = [
    'All',
    'Music',
    'Youth music',
    'Lo-fi',
    'Live',
    'Soul Music',
    'Humans',
    'Nobita Nobi',
    'Martial Arts Movies',
    'Game shows',
    'Indie Music',
    'Children Music',
    'Soundtracks',
    'Eating',
    'K-Pop',
    'Rapping',
  ];

  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(true);
  const [slide, setSlide] = useState(0);
  const sliderRef = useRef();
  const { handleClick, active } = useStore();

  const goLeft = () => {
    if (slide - 370 >= 0) {
      sliderRef.current.scrollTo(slide - 370, 0);
    } else {
      sliderRef.current.scrollTo(0, 0);
    }
  };
  const goRight = () => {
    if (slide + 370 <= 2971) {
      sliderRef.current.scrollTo(slide + 370, 0);
    } else {
      sliderRef.current.scrollTo(2971, 0);
    }
  };
  const onSlider = () => {
    setSlide(sliderRef.current.scrollLeft);
    setArrowLeft(slide > 0 ? true : false);
    setArrowRight(slide < 2971 ? true : false);
  };

  return (
    <div className="filter-bar">
      <div
        style={{ visibility: `${arrowLeft ? 'visible' : 'hidden'}` }}
        onClick={() => goLeft()}
        className="filter-bar__arrow-left">
        <ArrowBackIosNewIcon style={{ fontSize: 'small' }} />
      </div>
      <div
        ref={sliderRef}
        onScroll={() => onSlider()}
        className="filter-bar__items">
        {listBar.map((item, index) => (
          <button
            title={item}
            className={
              item === active ? ' active filter-bar__btn' : 'filter-bar__btn'
            }
            key={index}
            onClick={() => {
              handleClick(item);
            }}>
            {item}
          </button>
        ))}
      </div>
      <div
        style={{ visibility: `${arrowRight ? 'visible' : 'hidden'}` }}
        onClick={() => goRight()}
        className="filter-bar__arrow-left">
        <ArrowForwardIosIcon style={{ fontSize: 'small' }} />
      </div>
    </div>
  );
};
export default FilterBar;
