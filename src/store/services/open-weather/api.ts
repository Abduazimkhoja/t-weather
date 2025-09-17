import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENV } from "@/consts/env.const";
import { createUrl } from "@/shared/lib";
import type {
	GetCoordsByCityParams,
	GetCoordsByCityResponse,
	GetWeatherByCityParams,
	GetWeatherByCityResponse,
	GetWeatherByCoordsParams,
	GetWeatherByCoordsResponse,
} from "./type";

// consts
const REDUCER_PATH = "openWeatherApi";
const ROOT_TAG_TYPE = "openWeather" as const;
const TAG_TYPES = [ROOT_TAG_TYPE] as const;

const baseUrl = createUrl({
	baseUrl: ENV.OPEN_WEATHER_URL || "",
});

export const openWeatherApi = createApi({
	reducerPath: REDUCER_PATH,
	tagTypes: TAG_TYPES,
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl().origin,
	}),
	endpoints: (builder) => ({
		getWeatherByCity: builder.query<
			GetWeatherByCityResponse,
			GetWeatherByCityParams
		>({
			query: ({ searchParams }) => ({
				url: baseUrl({
					endpoints: ["data", "2.5", "weather"],
					queryParams: {
						lang: "ru",
						units: "metric",
						...searchParams,
						appid: ENV.OPEN_WEATHER_KEY,
					},
				}).path,
			}),
		}),
		getWeatherByCoords: builder.query<
			GetWeatherByCoordsResponse,
			GetWeatherByCoordsParams
		>({
			query: ({ searchParams }) => ({
				url: baseUrl({
					endpoints: ["data", "3.0", "onecall"],
					queryParams: {
						lang: "en",
						units: "metric",
						...searchParams,
						appid: ENV.OPEN_WEATHER_KEY,
					},
				}).path,
			}),
		}),
		getCoordsByCity: builder.query<
			GetCoordsByCityResponse,
			GetCoordsByCityParams
		>({
			query: ({ searchParams }) => ({
				url: baseUrl({
					endpoints: ["geo", "1.0", "direct"],
					queryParams: {
						...searchParams,
						appid: ENV.OPEN_WEATHER_KEY,
					},
				}).path,
			}),
		}),
	}),
});

export const openWeatherEndpoints = openWeatherApi?.endpoints;
export const {
	useGetWeatherByCoordsQuery,
	useGetWeatherByCityQuery,
	useGetCoordsByCityQuery,
} = openWeatherApi;
