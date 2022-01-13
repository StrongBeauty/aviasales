import { AppStateType } from './store';

export const isAuth = (state: AppStateType) => state.auth.user.isAuth;
export const userName = (state: AppStateType) => state.auth.user.name;
export const stateCard = (state: AppStateType) => state.trips.tripsCard;
export const errorAlert = (state: AppStateType) => state.errors.errorAlert;
export const stateData = (state: AppStateType) => state.trips.selectedFilters;
export const backgroundImage = (state: AppStateType) => state.backgroundImage.backgroundImage;
export const selectedFilters = (state: AppStateType) => state.trips.selectedFilters;
export const isDirect = (state: AppStateType) => state.redirect.isDirect;
