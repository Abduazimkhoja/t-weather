import type { ReactNode } from "react";

export function PageError({ errorMessage }: Props) {
	return <p>{errorMessage || "Something went wrong"}</p>;
}

interface Props {
	errorMessage: ReactNode | undefined | null;
}
