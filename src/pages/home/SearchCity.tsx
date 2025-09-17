import { Search } from "lucide-react";
import { useState } from "react";
import { uzCitiesList } from "@/consts/cities.const";

export function SearchCity() {
	const [query, setQuery] = useState("");

	const searchedCityList = uzCitiesList.filter(
		(name) => query === null || name.includes(query),
	);

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
						<li className="light-text" key={name}>
							{name}
						</li>
					))
				)}
			</ul>
		</div>
	);
}
