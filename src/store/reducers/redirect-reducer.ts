import { ACTIONS_TYPE } from '../constants';

const initialState = {
  isDirect: false,
};

export const redirectReducer = (
  state: RedirectType = initialState,
  action: ActionsType
): RedirectType => {
  switch (action.type) {
    case ACTIONS_TYPE.TOGGLE_IS_DIRECT: {
      return {
        ...state,
        isDirect: action.payload.isDirect,
      };
    }
    default:
      return state;
  }
};

export const toggleIsDirectAC = (isDirect: boolean) =>
  ({ type: ACTIONS_TYPE.TOGGLE_IS_DIRECT, payload: { isDirect } } as const);

type ActionsType = ReturnType<typeof toggleIsDirectAC>;

export type RedirectType = typeof initialState;
