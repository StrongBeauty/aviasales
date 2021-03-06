import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '@mui/material/Button';
import { MESSAGES } from '../constants';

const { formTitle, username, password, confirmPassword, buttonName, email, errorsMessage } =
  MESSAGES.registrationForm;

type FormValues = {
  username: string;
  password: string;
  passwordConfirmation: string;
  email: string;
};

type FormProps = {
  setActiveForm: (arg: boolean) => void;
  formControl: {
    formStyles: () => { minHeight: string } | {};
    classToggle: () => string;
    classFormOne: () => string;
    classFormTwo: () => string;
  };
  setHeight: (arg: number | undefined) => void;
};

export const RegistrationForm: FC<FormProps> = ({ setActiveForm, formControl, setHeight }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHeight(ref.current?.clientHeight);
  });

  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = () => {
    reset();
  };

  return (
    <div className={formControl.classFormTwo()} onClick={() => setActiveForm(true)}>
      <div className="form-header">
        <h1>{formTitle}</h1>
      </div>
      <div className="form-content" ref={ref}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">{username}</label>
            <input
              style={errors.username && { border: '1px solid red' }}
              {...register('username', {
                validate: (value) => value.length >= 2,
              })}
            />
            {errors.username && <p style={{ color: 'red' }}>{errorsMessage.username}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">{password}</label>
            <input
              style={errors.password && { border: '1px solid red' }}
              type="password"
              {...register('password', {
                validate: {
                  validate: (value) => value.length >= 5,
                },
              })}
            />
            {errors.password && <p style={{ color: 'red' }}>{errorsMessage.password}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirmation">{confirmPassword}</label>
            <input
              type="password"
              style={errors.passwordConfirmation && { border: '1px solid red' }}
              {...register('passwordConfirmation', {
                required: errorsMessage.passwordConfirmationInput,
                validate: {
                  matchesPreviousPassword: (value) => {
                    // eslint-disable-next-line @typescript-eslint/no-shadow
                    const { password } = getValues();
                    return password === value || errorsMessage.passwordConfirmationError;
                  },
                },
              })}
            />
            {errors.passwordConfirmation && (
              <p style={{ color: 'red' }}>{errors.passwordConfirmation.message}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">{email}</label>
            <input
              style={errors.email && { border: '1px solid red' }}
              type="text"
              {...register('email', {
                pattern: errorsMessage.patternEmail,
                validate: {
                  email: (value) => value.includes('@') && value.length >= 5,
                },
              })}
            />
            {errors.email && <p style={{ color: 'red' }}>{errorsMessage.email}</p>}
          </div>
          <div className="form-group">
            <Button type="submit" sx={{ height: '46px' }}>
              {buttonName}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
