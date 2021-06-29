import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/global.scss';

import ReactModal from 'react-modal';
import { Header } from './components/Header';
import { Routes } from './routes';
import { DevProvider } from './hooks/useDev';

ReactModal.setAppElement('#root');

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DevProvider>
        <Header />
        <Routes />
      </DevProvider>
    </BrowserRouter>
  );
};
