import { screen } from '@testing-library/react';
import { LoginPage } from '@/ui/pages/auth/components/loginPage';
import { providerWrapper } from '../../../utils/providerWrapper';

describe('LoginPage', () => {
  it('renders the login form', () => {
    providerWrapper(<LoginPage />, { route: '/sign-in' });

    expect(screen.getByLabelText('Имя пользователя')).toBeInTheDocument();
    expect(screen.getByLabelText('Пароль')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Запомнить меня' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Войти' })).toBeInTheDocument();
  });

  it('marks credential fields as required', () => {
    providerWrapper(<LoginPage />, { route: '/sign-in' });

    expect(screen.getByLabelText('Имя пользователя')).toBeRequired();
    expect(screen.getByLabelText('Пароль')).toBeRequired();
  });
});
