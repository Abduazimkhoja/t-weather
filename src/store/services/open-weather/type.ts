import type * as z from "zod";
import type { uzCitiesList } from "@/consts/cities.const";
import type {
	cordsByCityResponseSchema,
	weatherByCityResponseSchema,
} from "./schema";

// HTTPS 🚀

// getWeatherByCountry  🔵
export type GetWeatherByCityResponse = z.infer<
	typeof weatherByCityResponseSchema
>;
export type GetWeatherByCityParams = {
	searchParams?: {
		q: (typeof uzCitiesList)[number];
		units?: WeatherUnits;
		lang?: WeatherLanguage;
		appid?: string;
	};
};

// getWeatherByCoords  🔵
export type GetWeatherByCoordsResponse = unknown;
export type GetWeatherByCoordsParams = {
	searchParams?: {
		lat: number;
		lon: number;
		exclude?: "current" | "minutely" | "hourly" | "daily" | "alerts";
		units?: WeatherUnits;
		lang?: WeatherLanguage;
		appid?: string;
	};
};

// getWeatherByCity  🔵
export type GetCoordsByCityResponse = z.infer<typeof cordsByCityResponseSchema>;
export type GetCoordsByCityParams = {
	searchParams?: {
		q: (typeof uzCitiesList)[number];
		limit?: number;
		appid?: string;
	};
};

type WeatherUnits = "standard" | "metric" | "imperial";
type WeatherLanguage = "ru" | "en";
