import * as z from "zod";
import { baseEntitySchema } from "../_api-configs/schema";

export const exampleItemSchema = baseEntitySchema({
	test: z.string(),
});

export const createExampleBodySchema = z.object({
	test: z.string(),
});

export const updateExampleBodySchema = z.object({
	test: z.string().optional(),
});
