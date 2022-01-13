import { ACTIONS_TYPE } from '../constants';

export type SelectedFiltersType = {
  title: string;
  value: string;
  defaultValue: string | number | Date;
};
export type TripCardType = {
  time: TimeType;
  tripId: number;
  numberOfFreeTickets: number;
  data: TicketType[];
  note: string;
  tailNumber: string;
};

export type TimeType = {
  hour: number;
  minute: number;
  second: number;
  nano: number;
};

export type TicketType = {
  id: number;
  flightId: number;
  seat: string;
  price: number;
  orderStatus: boolean;
};

export type TicketDataType = {
  departureCity: string;
  arrivalCity: string;
  date: string;
};
export type ResultType = [TripCardType[], TicketDataType];

const initialState = {
  tripsCard: [] as any[],
  selectedFilters: [] as Array<SelectedFiltersType>,
};

export const tripsReducer = (state: TripsType = initialState, action: ActionsType): TripsType => {
  switch (action.type) {
    case ACTIONS_TYPE.TRIPS_CARD: {
      return {
        ...state,
        tripsCard: [...action.payload.result],
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

export const tripsCardAC = (result: ResultType) =>
  ({
    type: ACTIONS_TYPE.TRIPS_CARD,
    payload: { result },
  } as const);

export const selectedFiltersAC = (selectedFilters: SelectedFiltersType[]) =>
  ({ type: ACTIONS_TYPE.SELECTED_FILTERS, payload: { selectedFilters } } as const);

type ActionsType = ReturnType<typeof tripsCardAC> | ReturnType<typeof selectedFiltersAC>;

export type TripsType = typeof initialState;
