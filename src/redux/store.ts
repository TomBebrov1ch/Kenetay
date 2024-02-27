import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
    reducer: {
        menu: menuSlice,
        modal: modalSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
