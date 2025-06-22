import React from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '../Services/AuthContext';
import { isProfileComplete } from '../Services/authService';

export default function Index() {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <Redirect href="/(auth)/SignIn" />;
  }

  return isProfileComplete(currentUser) 
    ? <Redirect href="/(tabs)" /> 
    : <Redirect href="/(auth)/profileSetup" />;
  // <Redirect href="/(auth)/profileSetup"/>
}