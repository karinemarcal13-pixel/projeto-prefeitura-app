import React from 'react';
import RootNavigation from './src/navigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <RootNavigation />
      <StatusBar style="auto" />
    </>
  );
}

