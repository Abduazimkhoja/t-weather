import { defaultCity } from "@/consts/cities.const";
import { cn } from "@/shared/lib/cn";
import { EmptyData } from "@/shared/ui/layout/EmptyData";
import { PageError } from "@/shared/ui/layout/PageError";
import { PageLoading } from "@/shared/ui/layout/PageLoading";
import { useGetWeatherByCityQuery } from "@/store/services";
import "./style.css";

import { WeatherContent } from "./WeatherContent";
import { Sidebar } from "./Sidebar";

export function HomePage() {
	const { data, isLoading, error } = useGetWeatherByCityQuery({
		searchParams: { q: defaultCity },
	});

	if (isLoading) return <PageLoading />;
	if (error || !data) return <PageError errorMessage="error" />;
	if (!data) return <EmptyData />;

	return (
		<main className={cn("wrapper", "flex justify-between")}>
			<WeatherContent weatherData={data} />
			<Sidebar weatherData={data} />
		</main>
	);
}
