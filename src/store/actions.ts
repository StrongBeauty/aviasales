import { ACTIONS_TYPE } from './constants';

export const actions = {
  toggleIsAuthAC: (isAuth: boolean, name: string) =>
    ({ type: ACTIONS_TYPE.TOGGLE_IS_AUTH, payload: { isAuth, name } } as const),
  loadImageAC: (backgroundImag: string) =>
    ({ type: ACTIONS_TYPE.LOAD_IMAGE, payload: { backgroundImag } } as const),
  toggleIsDirectAC: (isDirect: boolean) =>
    ({ type: ACTIONS_TYPE.TOGGLE_IS_DIRECT, payload: { isDirect } } as const),
  tripsCardAC: (result: any[]) =>
    ({
      type: ACTIONS_TYPE.TRIPS_CARD,
      payload: { result },
    } as const),
  errorAlertAC: (errorAlert: string) =>
    ({ type: ACTIONS_TYPE.ERROR_ALERT, payload: { errorAlert } } as const),
  selectedFiltersAC: (selectedFilters: SelectedFiltersType[]) =>
    ({ type: ACTIONS_TYPE.SELECTED_FILTERS, payload: { selectedFilters } } as const),
};

export type SelectedFiltersType = {
  title: string;
  value: string;
  defaultValue: string;
};
