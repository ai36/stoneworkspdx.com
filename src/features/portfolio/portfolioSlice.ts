import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  portfolioItems,
  type PortfolioItem,
  type PortfolioCategory,
} from "@/data/portfolio";

interface PortfolioState {
  items: PortfolioItem[];
  activeFilter: PortfolioCategory | "all";
  selectedProjectId: string | null;
}

export type PortfolioSliceState = PortfolioState;

const initialState: PortfolioState = {
  items: portfolioItems,
  activeFilter: "all",
  selectedProjectId: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setActiveFilter: (
      state,
      action: PayloadAction<PortfolioCategory | "all">
    ) => {
      state.activeFilter = action.payload;
    },
    setSelectedProject: (state, action: PayloadAction<string | null>) => {
      state.selectedProjectId = action.payload;
    },
  },
});

export const { setActiveFilter, setSelectedProject } = portfolioSlice.actions;

/**
 * Selectors
 * Note: пока оставляем входной тип как { portfolio: PortfolioState }
 * чтобы не требовать немедленной миграции store.ts/root state.
 */
export const selectFilteredItems = (state: { portfolio: PortfolioState }) => {
  const { items, activeFilter } = state.portfolio;
  if (activeFilter === "all") return items;
  return items.filter((item) => item.category === activeFilter);
};

export const selectSelectedProjectId = (state: { portfolio: PortfolioState }) =>
  state.portfolio.selectedProjectId;

export const selectSelectedProject = (state: { portfolio: PortfolioState }) => {
  const { items, selectedProjectId } = state.portfolio;
  if (!selectedProjectId) return null;
  return items.find((item) => item.id === selectedProjectId) ?? null;
};

export default portfolioSlice.reducer;
