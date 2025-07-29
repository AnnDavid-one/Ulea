// components/ThemeToggle.tsx
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.container}>
      <Ionicons 
        name={isDarkMode ? 'sunny' : 'moon'} 
        size={24} 
        color={isDarkMode ? '#FFD700' : '#000'} 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ThemeToggle;