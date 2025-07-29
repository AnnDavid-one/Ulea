import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "@/Store/useAuthStore";
import { Provider } from 'react-redux';
import { store } from './../State/store';
import { useEffect } from 'react';
import { router } from 'expo-router';
import { ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const { user, loading, initializeAuth } = useAuthStore();

  // Initialize auth state
  useEffect(() => {
    const unsubscribe = initializeAuth();
    return unsubscribe;
  }, []);

  // Handle navigation based on auth state
  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace('/(tabs)');
      } else {
        router.replace('/(auth)');
      }
    }
  }, [user, loading]);

  if (loading) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
          <ActivityIndicator size="large" color="white" />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor={"black"} />
        <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
          <Stack screenOptions={{headerShown:false}} />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}