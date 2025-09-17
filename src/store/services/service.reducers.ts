import { exampleApi } from "./example/api";
import { openWeatherApi } from "./open-weather/api";

const apiList = [openWeatherApi, exampleApi];

export const apiReducers = Object.fromEntries(
	apiList.map(({ reducerPath, reducer }) => [reducerPath, reducer]),
);

export const apiMiddlewareList = apiList.map(({ middleware }) => middleware);
