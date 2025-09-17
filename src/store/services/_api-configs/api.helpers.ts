import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { ENV } from "@/consts/env.const";
import { createUrl } from "@/shared/lib";

export const rootUrl = (basePaths?: string[]) =>
	createUrl({
		baseUrl: ENV.API_URL,
		basePaths,
	});

const originBaseUrl = rootUrl()().origin;

export const instanceFetchBaseQuery = fetchBaseQuery({
	baseUrl: originBaseUrl,
});
