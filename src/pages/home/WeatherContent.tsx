import type { GetWeatherByCityResponse } from "@/store/services";

export function WeatherContent({ weatherData }: Props) {
	return (
		<>
			{/* <header className="text-center">
				<span className="">the.weather</span>
			</header> */}

			<div className="root-image-wrap">
				<img alt="" className="" src="https://i.imgur.com/M8VyA2h.png" />
			</div>

			<div className="flex flex-row flex-x-center gap-5 info-container">
				<h1 className="root-heading">
					{Math.round(weatherData.main.temp)}&#176;
				</h1>

				<div className="">
					<h2 className="city-name">{weatherData.name}</h2>
					<time
						className="text-sm"
						dateTime={new Date(weatherData.dt * 1000).toISOString()}
					>
						{new Date(weatherData.dt * 1000).toLocaleString("en-GB", {
							hour: "2-digit",
							minute: "2-digit",
							weekday: "long",
							day: "numeric",
							month: "short",
							year: "2-digit",
						})}
					</time>
				</div>
				<div className="flex-center flex-col text-center">
					<div className="image-wrap">
						<img
							width={50}
							height={50}
							alt={weatherData.weather[0].description}
							className=""
							src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
						/>
					</div>
					<small className="text-sm">{weatherData.weather[0].main}</small>
				</div>
			</div>
		</>
	);
}
interface Props {
	weatherData: GetWeatherByCityResponse;
}
