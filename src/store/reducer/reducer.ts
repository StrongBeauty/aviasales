import { ACTIONS_TYPE } from '../constants';
import { actions, SelectedFiltersType } from '../actions';

const initialState = {
  user: {
    isAuth: false,
    name: '',
  } as UserType,
  tripsCard: [] as any, // as Array<TripsCardType>,
  isDirect: false,
  errorAlert: '',
  backgroundImage: '',
  selectedFilters: [] as Array<SelectedFiltersType>,
};

export const listState = (
  // eslint-disable-next-line default-param-last
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

export type TripCardType = {
  time: TimeType;
  tripId: number;
  numberOfFreeTickets: number;
  data: DataType[];
};

export type TimeType = {
  hour: number;
  minute: number;
  second: number;
  nano: number;
};

export type DataType = {
  id: number;
  flightId: number;
  seat: string;
  price: number;
  orderStatus: boolean;
};

export type UserType = {
  isAuth: boolean;
  name: string;
};

export type ResultType = [TripCardType[], TicketDataType];

export type TripsCardsType = {
  result: ResultType;
};

export type TicketDataType = {
  departureCity: string;
  arrivalCity: string;
  date: string;
};

/* export type RootReducerType = typeof listState;

export type AppStateType = ReturnType<RootReducerType>; */

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
  PropertiesTypes<T>
>;

export type ActionsType = InferActionsTypes<typeof actions>;

export type AppStateType = typeof initialState;
