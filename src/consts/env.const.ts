export const ENV = {
	API_URL: import.meta.env.VITE_SERVER_URL || "",
	MEDIA_URL: `${import.meta.env.VITE_SERVER_URL}/upload/`,
	OPEN_WEATHER_KEY: import.meta.env.VITE_OPEN_WEATHER_KEY || "",
	OPEN_WEATHER_URL: import.meta.env.VITE_OPEN_WEATHER_URL || "",
} as const;
