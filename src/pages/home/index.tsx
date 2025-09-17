import { cn } from "@/shared/lib/cn";
import { EmptyData } from "@/shared/ui/layout/EmptyData";
import { PageError } from "@/shared/ui/layout/PageError";
import { useGetWeatherByCityQuery } from "@/store/services";
import "./style.css";

import { useAppSelector } from "@/store/redux-hooks";
import { Sidebar } from "./Sidebar";
import { WeatherContent } from "./WeatherContent";

export function HomePage() {
	const selectedCity = useAppSelector((state) => state.city.selectedCity);

	const { data, isLoading, error } = useGetWeatherByCityQuery({
		searchParams: { q: selectedCity },
	});

	// if (isLoading) return <PageLoading />;
	if (error) return <PageError errorMessage="error" />;
	if (!data && !isLoading) return <EmptyData />;

	return (
		<main className={cn("wrapper", "flex justify-between")}>
			<section>{!isLoading && <WeatherContent weatherData={data} />}</section>

			<aside className="sidebar">
				{!isLoading && <Sidebar weatherData={data} />}
			</aside>
		</main>
	);
}
