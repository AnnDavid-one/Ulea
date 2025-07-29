import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
// import { COLORS } from '@/Constants/theme';
import { userPostStyles } from '../styles/feed.styles';
import { useTheme } from '../hooks/useTheme';
import { Platform } from 'react-native';


export default function TabLayout() {
  const { COLORS } = useTheme();
  const styles = userPostStyles();
  return (
    <Tabs
     screenOptions={{
        tabBarShowLabel: false, 
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle: {
          backgroundColor: COLORS.background2,
          borderTopWidth: 0,
          // Removed absolute positioning
          position: 'relative', 
          elevation: 14,
          height: 60, // Slightly taller for better touch targets
          paddingBottom: Platform.select({
            ios: 8,
            android: 4,
          }),
        },
        // Added safe area insets for iOS
        tabBarHideOnKeyboard: true, // Added this line to hide tab bar when keyboard appears
      }}
    >

        <Tabs.Screen
        name='index'
        options={{tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color} />}}
        />
         <Tabs.Screen
        name='chat'
        options={{tabBarIcon: ({size, color}) => <Ionicons name="chatbubble" size={size} color={color} />}}

        />
         <Tabs.Screen
        name='create'
        options={{tabBarIcon: ({size, color}) => <Ionicons name="add-circle" size={size} color={COLORS.primary} />}}

        />
         <Tabs.Screen
        name='notifications'
        options={{tabBarIcon: ({size, color}) => <Ionicons name="heart" size={size} color={color} />}}

        />
         <Tabs.Screen
        name='profile'
        options={{tabBarIcon: ({size, color}) => <Ionicons name="person" size={size} color={color} />}}

        />
    
    </Tabs>
  );
}