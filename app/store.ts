import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "@/features/ui/uiSlice";
import portfolioReducer from "@/features/portfolio/portfolioSlice";
import leadFormReducer from "@/features/leadForm/leadFormSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    portfolio: portfolioReducer,
    leadForm: leadFormReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
