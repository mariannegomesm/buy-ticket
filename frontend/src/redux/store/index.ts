import { createStore } from "redux";
import { rootReducer } from "../index";
import { composeWithDevTools } from "redux-devtools-extension";
import {persistStore, persistReducer} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {key: "root", whitelist: ["loginReducer"], storage};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = composeWithDevTools({ trace: true });

export const store = createStore(persistedReducer, composeEnhancers());
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;