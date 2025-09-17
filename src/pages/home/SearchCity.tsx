import { Search } from "lucide-react";
import { useState } from "react";
import { uzCitiesList } from "@/consts/cities.const";
import { cn } from "@/shared/lib/cn";
import { useAppDispatch, useAppSelector } from "@/store/redux-hooks";
import { setSelectedCity } from "@/store/slices";

export function SearchCity() {
	const [query, setQuery] = useState("");

	const searchedCityList = uzCitiesList.filter(
		(name) => query === null || name.includes(query),
	);

	const selectedCity = useAppSelector((state) => state.city.selectedCity);
	const dispatch = useAppDispatch();

	return (
		<div>
			<div className="sidebar-search">
				<input
					type="text"
					id="location"
					name="location"
					placeholder="Another location"
					className=" "
					defaultValue={query || ""}
					value={query || ""}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<Search size={24} className="sidebar-search-button" />
			</div>

			<ul className="sidebar__cities sidebar-container">
				{!searchedCityList.length ? (
					<li className="light-text">No results</li>
				) : (
					searchedCityList.map((name) => (
						<li
							onClick={() => dispatch(setSelectedCity(name))}
							className={cn("light-text", {
								active: selectedCity.toLowerCase() === name.toLowerCase(),
							})}
							key={name}
						>
							{name}
						</li>
					))
				)}
			</ul>
		</div>
	);
}
