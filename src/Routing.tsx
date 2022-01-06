import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthorizationPage, HomePage, InformationPage, NotFoundPage, ResultPage } from './pages';

type RootState = {
  isDirect: boolean;
};

export const Routing: React.FC = () => {
  const isDirect: boolean = useSelector((state: RootState) => state.isDirect);
  if (isDirect) {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/inf/:id" element={<InformationPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthorizationPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
