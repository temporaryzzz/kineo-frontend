import { render, screen } from '@testing-library/react';
import { LoginPage } from '@/ui/pages/login/components/loginPage';

describe('LoginPage', () => {
  it('renders the login form', () => {
    render(<LoginPage />);

    expect(screen.getByRole('heading', { name: 'Вход' })).toBeInTheDocument();
    expect(screen.getByLabelText('Имя пользователя')).toBeInTheDocument();
    expect(screen.getByLabelText('Пароль')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Запомнить меня' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Войти' })).toBeInTheDocument();
  });

  it('marks credential fields as required', () => {
    render(<LoginPage />);

    expect(screen.getByLabelText('Имя пользователя')).toBeRequired();
    expect(screen.getByLabelText('Пароль')).toBeRequired();
  });
});
