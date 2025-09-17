import type { RouteObject } from "react-router-dom";
import { NotFoundPage } from "@/pages/NotFound";
import { Roles } from "@/shared/types";
import { type RoutesItem, routesList } from "./route-list";

const allRoutes: TAllRoutes = [
	...routesList,
	// { path: "/sign-in", element: <SignIn />, allowedList: [Roles.GUEST] },
	{ path: "*", element: <NotFoundPage /> },
];

export const filterRouterForRole: FilterRouterForRole = (
	{ path, allowedList, deniedList },
	role,
) => {
	if (!path || path === "*") return true;
	if (role === Roles.GUEST && allowedList?.includes(Roles.GUEST)) return true;
	if (!allowedList && !deniedList) return true;
	if (!allowedList?.includes(role) || deniedList?.includes(role)) return false;
	return true;
};

export const useRoutesForRole = () => {
	const userRole = Roles.GUEST;

	const filterRoutes = (routes: TAllRoutes, role: Roles): RouteObject[] => {
		const filteredRoutes = routes
			.filter(({ path, allowedList, deniedList }) =>
				filterRouterForRole(
					{ path: path || "", allowedList, deniedList },
					role,
				),
			)
			.map(({ deniedList, allowedList, children, ...route }) => ({
				...route,
				children: children ? filterRoutes(children, role) : undefined,
			}));

		return filteredRoutes as RouteObject[];
	};

	return filterRoutes(allRoutes, userRole);
};

type FilterRouterForRole = (
	route: Pick<RoutesItem, "path" | "allowedList" | "deniedList">,
	role: Roles,
) => boolean;

type TCustomRoute = RouteObject & {
	allowedList?: string[];
	deniedList?: string[];
};

type TAllRoutes = TCustomRoute[];
