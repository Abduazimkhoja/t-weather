import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "./noop-storage";
import { apiReducers } from "./services/service.reducers";
import { sliceReducers } from "./slices/slice.reducers";

const persistWhiteList: (keyof typeof sliceReducers)[] = [
	"lang",
	"city",
	"theme",
];

const persistConfig = {
	key: "root",
	storage,
	whitelist: persistWhiteList,
};

const reducers = combineReducers({
	...sliceReducers,
	...apiReducers,
});

export const rootReducer = persistReducer(persistConfig, reducers);
