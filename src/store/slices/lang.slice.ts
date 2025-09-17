import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { LocaleEnum } from "@/shared/types";

export type LangState = {
	lang: LocaleEnum;
};

const initialState: LangState = {
	lang: LocaleEnum.UZ,
};

export const langSlice = createSlice({
	name: "lang",
	initialState,
	reducers: {
		setLang: (state, { payload }: PayloadAction<LocaleEnum>) => {
			state.lang = payload;
		},
	},
});

export const { setLang } = langSlice.actions;
export const langReducer = langSlice.reducer;
