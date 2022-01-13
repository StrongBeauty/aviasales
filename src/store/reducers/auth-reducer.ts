import { ACTIONS_TYPE } from '../constants';

export type UserType = {
  isAuth: boolean;
  name: string;
};

export type AuthType = typeof initialState;

const initialState = {
  user: {
    isAuth: false,
    name: '',
  } as UserType,
};

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
  switch (action.type) {
    case ACTIONS_TYPE.TOGGLE_IS_AUTH: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export const toggleIsAuthAC = (isAuth: boolean, name: string) =>
  ({ type: ACTIONS_TYPE.TOGGLE_IS_AUTH, payload: { isAuth, name } } as const);

type ActionsType = ReturnType<typeof toggleIsAuthAC>;
