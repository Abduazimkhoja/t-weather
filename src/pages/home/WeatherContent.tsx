import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import type { GetWeatherByCityResponse } from "@/store/services";

export function WeatherContent({ weatherData }: Props) {
	return (
		<>
			<div className="bg-image-wrap">
				<img alt="airship" src="https://i.imgur.com/M8VyA2h.png" />
			</div>

			<div className="degree">
				<h1 className="degree-title">
					{Math.round(weatherData.main.temp)}&#176;
				</h1>

				<div className="degree">
					<div>
						<h2 className="city-name">{weatherData.name}</h2>

						<time
							className="text-sm"
							dateTime={new Date(weatherData.dt * 1000).toISOString()}
						>
							{format(
								new Date(weatherData.dt * 1000),
								"HH:mm - EEEE, dd MMM ''yy",
								{ locale: enUS },
							)}
						</time>
					</div>

					<div className="flex-center flex-col text-center">
						<div className="weather-icon">
							<img
								width={50}
								height={50}
								alt={weatherData.weather[0].description}
								src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
							/>
						</div>
						<small className="text-sm">{weatherData.weather[0].main}</small>
					</div>
				</div>
			</div>
		</>
	);
}
interface Props {
	weatherData: GetWeatherByCityResponse;
}
