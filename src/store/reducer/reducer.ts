import { ACTIONS_TYPE } from '../constants';
import { actions, ResultType, SelectedFiltersType, UserType } from '../actions';

const initialState = {
  user: {
    isAuth: false,
    name: '',
  } as UserType,
  // todo
  tripsCard: [] as ResultType,
  isDirect: false,
  errorAlert: '',
  backgroundImage: '',
  selectedFilters: [] as Array<SelectedFiltersType>,
};

export const listState = (
  state: AppStateType = initialState,
  action: ActionsType
): AppStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.TOGGLE_IS_AUTH: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case ACTIONS_TYPE.LOAD_IMAGE: {
      return {
        ...state,
        backgroundImage: action.payload.backgroundImag,
      };
    }
    case ACTIONS_TYPE.TOGGLE_IS_DIRECT: {
      return {
        ...state,
        isDirect: action.payload.isDirect,
      };
    }
    case ACTIONS_TYPE.TRIPS_CARD: {
      return {
        ...state,
        tripsCard: [...action.payload.result],
      };
    }
    case ACTIONS_TYPE.ERROR_ALERT: {
      return {
        ...state,
        errorAlert: action.payload.errorAlert,
      };
    }
    case ACTIONS_TYPE.SELECTED_FILTERS: {
      return {
        ...state,
        selectedFilters: [...action.payload.selectedFilters],
      };
    }
    default:
      return state;
  }
};

/* export type RootReducerType = typeof listState;

export type AppStateType = ReturnType<RootReducerType>; */

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropertiesTypes<T>
>;

export type ActionsType = InferActionsTypes<typeof actions>;

export type AppStateType = typeof initialState;
