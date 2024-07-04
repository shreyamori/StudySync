import { Slot, SplashScreen } from 'expo-router';

import { AppProvider } from '../providers/AppProvider';
import React from 'react';

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AppProvider onInitialized={() => SplashScreen.hideAsync()}>
      <Slot />
    </AppProvider>
  );
}
