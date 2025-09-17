import { langReducer } from './lang.slice';
import { selectedCityReducer } from './selected-city.slice';
import { themeReducer } from './theme.slice';

export const sliceReducers = {
  lang: langReducer,
  theme: themeReducer,
	city: selectedCityReducer
};
