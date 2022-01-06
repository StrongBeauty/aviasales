import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MESSAGES } from '../constants';
import { ButtonPrimary } from '../components';
import { actions, Selectors } from '../store';

const { formTitle, buttonName, username, checkboxForm, password, forgotLink, errorsMessage } =
  MESSAGES.authenticationForm;

export const AuthenticationForm: React.FC = ({ formControl }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const isAuth = useSelector(Selectors.isAuth);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(actions.toggleIsAuthAC(!isAuth, data.username));
    navigate(-1);
  };

  return (
    <div className={formControl.classFormOne()}>
      <div className="form-header">
        <h1>{formTitle}</h1>
      </div>
      <div className="form-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">{username.toUpperCase()}</label>

            <input
              ref={register}
              style={errors.username && { border: '1px solid red' }}
              {...register('username', {
                validate: (value) => value.length >= 2,
              })}
            />
            {errors.username && <p style={{ color: 'red' }}>{errorsMessage.username}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">{password.toUpperCase()}</label>
            <input
              style={errors.password && { border: '1px solid red' }}
              type="password"
              {...register('password', {
                validate: {
                  passwordLenght: (value) => value.length >= 5,
                },
              })}
            />
            {errors.password && <p style={{ color: 'red' }}>{errorsMessage.password}</p>}
          </div>

          <div className="form-group">
            <label className="form-remember">
              <input type="checkbox" disabled {...register('checkbox')} />
              {checkboxForm}
            </label>
            <a className="form-recovery" href="#">
              {forgotLink}
            </a>
          </div>

          <div className="form-group">
            <ButtonPrimary type="submit" height="46px">
              {buttonName}
            </ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  );
};
