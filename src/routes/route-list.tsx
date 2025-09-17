import type { ReactElement } from "react";
import { HomePage } from "@/pages/home";
import { Roles } from "@/shared/types";
import RootLayout from "@/shared/ui/layout/RootLayout";

export const routesList: RoutesItem[] = [
	{
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <HomePage />,
				allowedList: [Roles.GUEST],
			},
			// {
			// 	path: "/mxik",
			// 	label: "mxik",
			// 	icon: <AiOutlineBars />,
			// 	element: <MxikPage />,
			// 	viewInSidebar: true,
			// },
			// {
			// 	path: "/products",
			// 	label: "products",
			// 	icon: <AiOutlineBars />,
			// 	element: <div>products</div>,
			// 	viewInSidebar: true,
			// },
			// {
			// 	path: "/categories",
			// 	label: "categories",
			// 	icon: <AiOutlineShopping />,
			// 	element: <div>categories</div>,
			// 	deniedList: ["user"],
			// 	viewInSidebar: true,
			// },
			// {
			// 	path: "/products/:id",
			// 	element: <div>test</div>,
			// 	deniedList: ["user"],
			// 	allowedList: ["admin"],
			// },
		],
	},
];

type BaseRoutesItem = {
	element: ReactElement;
	allowedList?: string[];
	deniedList?: string[];
	path?: string;
	children?: RoutesItem[];
};

type SidebarRoutesItem = {
	label: string;
	icon: ReactElement;
	viewInSidebar: true;
};

type SimpleRoutesItem = {
	label?: never;
	icon?: never;
	viewInSidebar?: false;
};

export type RoutesItem = BaseRoutesItem &
	(SidebarRoutesItem | SimpleRoutesItem);
