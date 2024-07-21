/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    textPrimary: '#1C1C1C',
    textSecondary:"#B1B3BA",
    background: '#fff',
    fontPrimary:"#1C1C1C",
    fontSecondary:"#B1B3BA",
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    textPrimary: '#1C1C1C',
    textSecondary:"#B1B3BA",
    background: '#151718',
    fontPrimary:"#1C1C1C",
    fontSecondary:"#B1B3BA",
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
