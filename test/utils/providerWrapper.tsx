import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderOptions } from '@testing-library/react';
import { type PropsWithChildren, type ReactElement } from 'react';
import { MemoryRouter } from 'react-router';
import { AppContainer } from '../../src/di/AppContainer';
import { AppContainerProvider } from '../../src/di/AppContainerContext';

type TestRenderOptions = Omit<RenderOptions, 'wrapper'> & {
  route?: string;
};

export function providerWrapper(
  ui: ReactElement,
  { route = '/', ...renderOptions }: TestRenderOptions = {},
) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  });
  const appContainer = new AppContainer(queryClient);

  function Wrapper({ children }: PropsWithChildren) {
    return (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[route]}>
          <AppContainerProvider appContainer={appContainer}>{children}</AppContainerProvider>
        </MemoryRouter>
      </QueryClientProvider>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
