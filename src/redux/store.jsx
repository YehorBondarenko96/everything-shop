import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "./slice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
    
const goodsLSConfig = {
    key: 'order',
    storage,
    whitelist: 'orderItems'
};

export const store = configureStore({
    reducer: {
        goods: persistReducer(goodsLSConfig, goodsReducer)
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);