// app/(auth)/_layout.tsx (only if you need auth-specific settings)
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        animation: 'slide_from_right', // Different animation for auth flows
        animationDuration:2,
        headerShown:false,
      }}
    >
      <Stack.Screen name="signIn" />
      <Stack.Screen name="signUp" />
      <Stack.Screen name="forgotPassword" />
    </Stack>
  );
}