import type { GetWeatherByCityResponse } from "@/store/services";
import { SearchCity } from "./SearchCity";

export function Sidebar({ weatherData }: Props) {
	return (
		<>
			<SearchCity />

			<hr className="divider" />

			<div className="sidebar-container ">
				<h3 className="sidebar__details-heading">Weather Details</h3>
				<ul className="details__list light-text">
					<li className="details__item">
						<span>Clouds</span>
						<span className="text-white">{weatherData.clouds.all}%</span>
					</li>
					<li className="details__item">
						<span>Humidity</span>
						<span className="text-white">{weatherData.main.humidity}%</span>
					</li>
					<li className="details__item">
						<span>Wind</span>
						<span className="text-white">{weatherData.wind.speed} km/h</span>
					</li>
					<li className="details__item">
						<span>Pressure</span>
						<span className="text-white">{weatherData.main.pressure} hPa</span>
					</li>
				</ul>
			</div>

			<hr className="divider" />
		</>
	);
}

interface Props {
	weatherData: GetWeatherByCityResponse;
}
