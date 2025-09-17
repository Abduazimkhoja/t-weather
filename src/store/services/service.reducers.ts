import { exampleApi } from "./example/api";
import { openWeatherApi } from "./open-weather/api";

export const apiReducers = {
	[openWeatherApi.reducerPath]: openWeatherApi.reducer,

	[exampleApi.reducerPath]: exampleApi.reducer,
};

export const apiMiddlewareList = [
	openWeatherApi.middleware,

	exampleApi.middleware,
];
