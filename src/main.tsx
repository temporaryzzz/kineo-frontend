import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import './styles/main.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { queryClient } from './data/shared/queryClient';
import { AppContainer } from './di/AppContainer';
import { AppContainerProvider } from './di/AppContainerContext';

const appContainer = new AppContainer(queryClient);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContainerProvider appContainer={appContainer}>
          <App />
        </AppContainerProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);

