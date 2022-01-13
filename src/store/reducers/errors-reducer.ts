import { ACTIONS_TYPE } from '../constants';

const initialState = {
  errorAlert: '',
};

export type ErrorsType = typeof initialState;

export const errorsReducer = (
  state: ErrorsType = initialState,
  action: ActionsType
): ErrorsType => {
  switch (action.type) {
    case ACTIONS_TYPE.ERROR_ALERT: {
      return {
        ...state,
        errorAlert: action.payload.errorAlert,
      };
    }
    default:
      return state;
  }
};

export const errorAlertAC = (errorAlert: string) =>
  ({ type: ACTIONS_TYPE.ERROR_ALERT, payload: { errorAlert } } as const);

type ActionsType = ReturnType<typeof errorAlertAC>;
