import '@/shared/index.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/appStore.ts';
import { MainPage } from '@/pages/main';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </StrictMode>,
);
