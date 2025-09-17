import type { ReactNode } from "react";

export function Example({ children }: Props) {
 return <div>{children}</div>;
}

interface Props {
	children: ReactNode;
}
