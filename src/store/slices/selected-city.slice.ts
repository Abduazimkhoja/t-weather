import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { defaultCity, type uzCitiesList } from "@/consts/cities.const";
import type { GetWeatherByCityResponse } from "../services/open-weather/type";

interface SelectedCityState {
	selectedCity: (typeof uzCitiesList)[number];
	lastWeather: GetWeatherByCityResponse | null;
}

const initialState: SelectedCityState = {
	selectedCity: defaultCity,
	lastWeather: null,
};

const selectedCitySlice = createSlice({
	name: "selectedCity",
	initialState,
	reducers: {
		setSelectedCity: (
			state,
			action: PayloadAction<(typeof uzCitiesList)[number]>,
		) => {
			state.selectedCity = action.payload;
		},
		setLastWeather: (
			state,
			action: PayloadAction<GetWeatherByCityResponse>,
		) => {
			state.lastWeather = action.payload;
		},
	},
});

export const { setSelectedCity, setLastWeather } = selectedCitySlice.actions;
export const selectedCityReducer = selectedCitySlice.reducer;
