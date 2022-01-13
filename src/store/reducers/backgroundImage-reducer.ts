import { ACTIONS_TYPE } from '../constants';

const initialState = {
  backgroundImage: '',
};

export type BackgroundImageType = typeof initialState;

export const backgroundImageReducer = (
  state: BackgroundImageType = initialState,
  action: ActionsType
): BackgroundImageType => {
  switch (action.type) {
    case ACTIONS_TYPE.LOAD_IMAGE: {
      return {
        ...state,
        backgroundImage: action.payload.backgroundImage,
      };
    }
    default:
      return state;
  }
};

export const loadImageAC = (backgroundImage: string) =>
  ({ type: ACTIONS_TYPE.LOAD_IMAGE, payload: { backgroundImage } } as const);

type ActionsType = ReturnType<typeof loadImageAC>;
