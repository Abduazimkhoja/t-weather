import type { ReactNode } from "react";

export function EmptyData({ children }: Props) {
	return <div>{children || "Нет данных"}</div>;
}

interface Props {
	children?: ReactNode;
}
