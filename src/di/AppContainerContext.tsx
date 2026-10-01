import { createContext, useContext, type ReactNode } from 'react';
import type { AppContainer } from './AppContainer';

const AppContainerContext = createContext<AppContainer | null>(null);

type AppContainerProviderProps = {
  appContainer: AppContainer;
  children: ReactNode;
};

export function AppContainerProvider({ appContainer, children }: AppContainerProviderProps) {
  return (
    <AppContainerContext.Provider value={appContainer}>
      {children}
    </AppContainerContext.Provider>
  );
}

export function useAppContainer() {
  const appContainer = useContext(AppContainerContext);

  if (!appContainer) {
    throw new Error('useAppContainer must be used inside AppContainerProvider');
  }

  return appContainer;
}
