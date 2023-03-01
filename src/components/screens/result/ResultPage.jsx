import MetaData from '@/components/_share/MetaData';
import { useStore } from '@/hooks';
import YoutubeApi from '@/services/watchApi/YoutubeApi';
// import { CircularProgress } from '@mui/material';
import React, { Fragment, useCallback, useEffect, useRef } from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import FilterResult from './FilterResult';
import ResultItem from './ResultItem';

const ResultPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const { isLoading, setIsLoading, setIsWatchingPage } = useStore();
  const pageTokenRef = useRef('');

  const { query } = useParams();

  useEffect(() => {
    if (isLoading) {
      setSearchResults([]);
      pageTokenRef.current = '';
    }
    setIsWatchingPage(false);
  }, [isLoading, setIsWatchingPage]);

  const fetchResults = useCallback(async () => {
    try {
      const results = await YoutubeApi.getResults(query, pageTokenRef.current);
      const data = results.data;
      setSearchResults((prev) => [...prev, ...data.items]);
      pageTokenRef.current = data.nextPageToken;
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [query, setIsLoading, setSearchResults]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  // console.log('Result', searchResults);
  return (
    <>
      <MetaData title={`${query} - Youtube`} />
      <div className="result">
        <FilterResult />
        <div className="list-result">
          {searchResults.length !== 0 && (
            <InfiniteScroll
              dataLength={searchResults.length}
              next={fetchResults}
              hasMore={true}>
              {searchResults.map((item, index) => (
                <Fragment key={index}>
                  <ResultItem data={item} />
                </Fragment>
              ))}
            </InfiniteScroll>
          )}
        </div>
      </div>
    </>
  );
};

export default ResultPage;
