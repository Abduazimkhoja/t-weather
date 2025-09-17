import { createApi } from "@reduxjs/toolkit/query/react";
import { instanceFetchBaseQuery, rootUrl } from "../_api-configs/api.helpers";
import type {
	CreateExampleParams,
	CreateExampleResponse,
	DeleteExampleParams,
	DeleteExampleResponse,
	GetAllExamplesParams,
	GetAllExamplesResponse,
	GetByIdExampleParams,
	GetByIdExampleResponse,
	UpdateExampleParams,
	UpdateExampleResponse,
} from "./type";

// consts
const REDUCER_PATH = "exampleApi";
const BASE_PATH = "/api/v1/example";
const ROOT_TAG_TYPE = "example" as const;
const TAG_TYPES = [ROOT_TAG_TYPE] as const;
const rootInvalidateTag = [{ type: ROOT_TAG_TYPE, id: "LIST" }];

const baseUrl = rootUrl([BASE_PATH]);

export const exampleApi = createApi({
	reducerPath: REDUCER_PATH,
	tagTypes: TAG_TYPES,
	baseQuery: instanceFetchBaseQuery,
	endpoints: (builder) => ({
		getAllExample: builder.query<GetAllExamplesResponse, GetAllExamplesParams>({
			query: () => ({
				url: baseUrl().path,
				params: { isPaginate: true },
			}),
			providesTags: (result) =>
				result
					? [
							...(result?.data || []).map(({ id }) => ({
								type: ROOT_TAG_TYPE,
								id,
							})),
							...rootInvalidateTag,
						]
					: rootInvalidateTag,
		}),
		getOneExample: builder.query<GetByIdExampleResponse, GetByIdExampleParams>({
			query: ({ id }) => ({
				url: baseUrl({ endpoints: [id] }).path,
			}),
			providesTags: (result, _, { id }) => [
				{ type: ROOT_TAG_TYPE, id },
				...(result ? rootInvalidateTag : []),
			],
		}),
		createExample: builder.mutation<CreateExampleResponse, CreateExampleParams>(
			{
				query: ({ body }) => ({
					url: baseUrl().path,
					method: "POST",
					body,
				}),
				invalidatesTags: rootInvalidateTag,
			},
		),
		updateExample: builder.mutation<UpdateExampleResponse, UpdateExampleParams>(
			{
				query: ({ body, id }) => ({
					url: baseUrl({ endpoints: [id] }).path,
					method: "PATCH",
					body,
				}),
				invalidatesTags: rootInvalidateTag,
			},
		),
		deleteExample: builder.mutation<DeleteExampleResponse, DeleteExampleParams>(
			{
				query: ({ id }) => ({
					url: baseUrl({ endpoints: [id] }).path,
					method: "DELETE",
				}),
				invalidatesTags: rootInvalidateTag,
			},
		),
	}),
});

export const exampleEndpoints = exampleApi?.endpoints;
export const {
	useGetAllExampleQuery,
	useGetOneExampleQuery,
	useCreateExampleMutation,
	useUpdateExampleMutation,
	useDeleteExampleMutation,
} = exampleApi;
