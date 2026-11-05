import { useNavigate } from 'react-router';
import { useAppContainer } from '@/di/AppContainerContext';
import { useForm } from 'react-hook-form';
import { type RegisterFormValues, registerSchema } from '../schemas/registerPageSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export function RegisterPage() {
  const navigate = useNavigate();
  const appContainer = useAppContainer();
  const userRepository = appContainer.getUserRepository();

  const {
    register: registerField,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
    defaultValues: {
      username: '',
      password: '',
      repeatPassword: '',
    },
  });

  async function onSubmit(values: RegisterFormValues) {
    await userRepository
      .register({ username: values.username, password: values.password })
      .then(() => navigate('/sign-in', { replace: true }))
      .catch((error) => {
        console.log(error); //⁡⁢⁣⁣TODO: Определиться с форматом ошибок
        setError('root.server', {
          type: 'server',
          message: 'Sign-up failed. Try later.',
        });
      });
  }

  return (
    <main className="page auth-container">
      <span>
        <h1 className="kineo-title" id="register-title">
          Kineo
        </h1>
      </span>
      <section aria-labelledby="register-title">
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
          <div>
            <label htmlFor="username"></label>
            <input
              id="username"
              type="text"
              aria-invalid={Boolean(errors.username)}
              aria-describedby={errors.username ? 'username-error' : undefined}
              {...registerField('username')}
              placeholder="username"
            />
            <p id="username-error" role="alert" className="auth-form__error">
              {errors.username?.message}
            </p>
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? 'password-error' : undefined}
              {...registerField('password')}
              placeholder="password"
            />
            <p id="password-error" role="alert" className="auth-form__error">
              {errors.password?.message}
            </p>
          </div>
          <div>
            <label htmlFor="repeat-password"></label>
            <input
              id="repeat-password"
              type="password"
              autoComplete="new-password"
              aria-invalid={Boolean(errors.repeatPassword)}
              aria-describedby={errors.repeatPassword ? 'repeatPassword-error' : undefined}
              {...registerField('repeatPassword')}
              placeholder="repeat password"
            />
            <p id="repeatPassword-error" role="alert" className="auth-form__error">
              {errors.repeatPassword?.message}
            </p>
          </div>
          <div>
            {errors.root?.server && (
              <p role="alert" aria-live="polite" className="auth-form__error">
                {errors.root.server.message}
              </p>
            )}
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
      </section>
    </main>
  );
}
