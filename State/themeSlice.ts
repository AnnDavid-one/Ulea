// // themeSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import asyncStorage from '@react-native-async-storage/async-storage';
// interface ThemeColors {
//   primary: string;
//   primary2: string;
//   secondary: string;
//   secondary2: string;
//   background: string;
//   background2: string;
//   background3: string;
//   surface: string;
//   surfaceLight: string;
//   white: string;
//   logoColor: string;
//   signInText: string;
//   grey: string;
//   oppositeColor: string;
// }

// interface ThemeState {
//   isDarkMode: boolean;
//   COLORS: ThemeColors;
// }

// const darkColors: ThemeColors = {
//   primary: "#55BCF6",
//   primary2: "#005AAD",
//   secondary: "#2DD4BF",
//   secondary2: "#ff6666",
//   background: "#E8EAED",
//   background2: "#000000",
//   background3: "#000000",
//   surface: "#1A1A1A",
//   surfaceLight: "#2A2A2A",
//   white: "#FFFFFF",
//   logoColor: "#025895",
//   signInText: "#FFFFFF",
//   grey: "#9CA3AF",
//   oppositeColor: "#070606",
// };

// const lightColors: ThemeColors = {
//    primary2: "#55BCF6",
//   primary: "#ff7622",
//   background2: "#ffffff", // Simplified from gradient for now
//   background3: "#ffffff",
//   grey: "#dddddd",
//   secondary: "#2DD4BF",
//   secondary2: "#960707",
//   surface: "#ccc",
//   surfaceLight: "#666",
//   white: "#070606",
//   logoColor: "#025895",
//   signInText: "#333",
//   oppositeColor: "#ffffff",
//   background: "#FFFFFF", // Added missing property
// };

// const initialState: ThemeState = {
//   isDarkMode: true, // Default to dark mode
//   COLORS: darkColors,
// };

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     toggleTheme(state) {
//       state.isDarkMode = !state.isDarkMode;
//       state.COLORS = state.isDarkMode ? darkColors : lightColors;
//     },
//     setTheme(state, action: PayloadAction<boolean>) {
//       state.isDarkMode = action.payload;
//       state.COLORS = action.payload ? darkColors : lightColors;
//     },
//   },
// });

// export const { toggleTheme, setTheme } = themeSlice.actions;
// export default themeSlice.reducer;