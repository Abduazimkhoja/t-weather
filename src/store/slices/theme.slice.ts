import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
	theme: boolean;
}

const initialState: ThemeState = {
	theme: true,
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme(state, { payload }: PayloadAction<boolean>) {
			state.theme = payload;
		},
		toggleTheme(state) {
			state.theme = !state.theme;
		},
	},
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
