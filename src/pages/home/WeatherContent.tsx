import type { GetWeatherByCityResponse } from "@/store/services";

export function WeatherContent({ weatherData }: Props) {
	return (
		<section className="card1 col-lg-8 col-md-7">
			<header className="text-center">
				<span className="">the.weather</span>
				<img
					width={200}
					height={200}
					alt={weatherData.weather[0].description}
					className="image mt-5"
					src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
				/>
			</header>

			<div className="row px-3 mt-3 mb-3">
				<h1 className="large-font mr-3">
					{Math.round(weatherData.main.temp)}&#176;
				</h1>

				<div className="d-flex flex-column mr-3">
					<h2 className="mt-3 mb-0">{weatherData.name}</h2>
					<time dateTime={new Date(weatherData.dt * 1000).toISOString()}>
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
				<div className="d-flex flex-column text-center">
					<i className="fa fa-sun-o mt-4" aria-hidden="true" />
					<small>{weatherData.weather[0].main}</small>
				</div>
			</div>
		</section>
	);
}
interface Props {
	weatherData: GetWeatherByCityResponse;
}
