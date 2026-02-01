import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  mobileMenuOpen: boolean;
  lightboxOpen: boolean;
  lightboxImageIndex: number;
}

const initialState: UiState = {
  mobileMenuOpen: false,
  lightboxOpen: false,
  lightboxImageIndex: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    openLightbox: (state, action: PayloadAction<number>) => {
      state.lightboxOpen = true;
      state.lightboxImageIndex = action.payload;
    },
    closeLightbox: (state) => {
      state.lightboxOpen = false;
    },
    setLightboxIndex: (state, action: PayloadAction<number>) => {
      state.lightboxImageIndex = action.payload;
    },
  },
});

export const {
  setMobileMenuOpen,
  toggleMobileMenu,
  openLightbox,
  closeLightbox,
  setLightboxIndex,
} = uiSlice.actions;

export default uiSlice.reducer;
