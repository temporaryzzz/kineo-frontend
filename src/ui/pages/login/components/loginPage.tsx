import { useState, type SubmitEvent } from 'react';
import { useNavigate } from 'react-router';
import { useAppContainer } from '@/di/AppContainerContext';

export function LoginPage() {
  const navigate = useNavigate();
  const appContainer = useAppContainer();
  const userRepository = appContainer.getUserRepository();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await userRepository.login({ username, password }); //⁡⁢⁣⁣TODO: save auth cookies | localStorage⁡
      navigate('/', { replace: true });
    } catch {
      setError('Не удалось войти.\nПроверьте логин и пароль.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="page auth-container">
      <span>
        <h1 className="kineo-title" id="login-title">
          Kineo
        </h1>
      </span>
      <section aria-labelledby="login-title">
        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <label htmlFor="username"></label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              placeholder="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password"></label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div>
            <label className="checkbox-container auth-form__remember">
              <input name="remember" type="checkbox" />
              Remember me
            </label>

            <p role="alert" aria-live="polite" className="auth-form__error">
              {error}
            </p>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Входим...' : 'Войти'}
          </button>
        </form>
      </section>
    </main>
  );
}
