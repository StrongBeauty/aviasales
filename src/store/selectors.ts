import { AppStateType } from './reducer/reducer';

export const isAuth = (state: AppStateType) => state.user.isAuth;
export const userName = (state: AppStateType) => state.user.name;
export const stateCard = (state: AppStateType) => state.tripsCard;
export const errorAlert = (state: AppStateType) => state.errorAlert;
export const stateData = (state: AppStateType) => state.selectedFilters;
export const backgroundImage = (state: AppStateType) => state.backgroundImage;
export const selectedFilters = (state: AppStateType) => state.selectedFilters;
