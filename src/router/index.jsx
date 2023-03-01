import Layout from '@/components/_share/layout/Layout';
import Home from '@/screens/Home';
import NotFound from '@/screens/NotFound';
import Result from '@/screens/Result';
import Watch from '@/screens/Watch';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const ScreensRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/results/search_query=:query" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default ScreensRouter;
