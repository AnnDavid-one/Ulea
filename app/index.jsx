import { useEffect } from 'react';
import { Redirect, router } from 'expo-router';
import { useAuthStore } from '@/Store/useAuthStore';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const { user, loading, initializeAuth } = useAuthStore();

  // Initialize auth only once
  useEffect(() => {
    const unsubscribe = initializeAuth();
    return unsubscribe;
  }, []);

  // Handle redirects based on auth state
  useEffect(() => {
    if (!loading) {
      router.replace(user ? '/(tabs)' : '/(auth)');
    }
  }, [user, loading]);

  // Show loading indicator while checking auth
  

  // Fallback redirect (will be immediately replaced by the useEffect)
  return <Redirect href={user ? '/(tabs)' : '/(auth)'} />;
}