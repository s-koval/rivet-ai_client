import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from '@/pages/MainPage';

import AppContext from '@/utils/AppContext';

const App: FC = () => (
  <AppContext>
    <Routes>
      <Route element={<MainPage />} path="/" />
    </Routes>
  </AppContext>
);

export default App;
