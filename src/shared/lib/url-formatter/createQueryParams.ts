import * as z from "zod";

export type TQueryParams = Record<
	string,
	string | number | boolean | string[]
> & {
	page?: number;
	limit?: number;
	sort?: string;
	filter?: string;
	search?: string;
	orderBy?: string;
	order?: "asc" | "desc";
	category?: string;
	tags?: string[];
	startDate?: string;
	endDate?: string;
};

const queryValueSchema = z.union([
	z.string().min(1),
	z.number(),
	z.boolean(),
	z.array(z.union([z.string(), z.number(), z.boolean()])).min(1),
]);

type CreateQueryFunction = (options: {
	queryParams: Partial<TQueryParams> | undefined;
}) => string;

export const createQueryParams: CreateQueryFunction = ({ queryParams }) => {
	if (!queryParams) return "";
	const urlSearchParams = new URLSearchParams();

	for (const [key, value] of Object.entries(queryParams)) {
		const parseResult = queryValueSchema.safeParse(value);

		if (parseResult.success) {
			const output = Array.isArray(parseResult.data)
				? parseResult.data.join(",")
				: parseResult.data;
			urlSearchParams.append(key, `${output}`);
		}
	}

	return urlSearchParams.toString();
};
