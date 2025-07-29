import React, { useState } from 'react';
import { router } from 'expo-router';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';

const ForgotPasswordScreen = ({ navigation } :{navigation:any}) => {
  const { COLORS } = useTheme();
  const styles = forgotPasswordStyles();
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Implement your password reset logic here
    console.log('Reset password for:', email);
    // After submission, you might navigate back or show success message
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Main content */}
        <View style={styles.content}>
          <Image 
            source={require('../../assets/images/user.png')} // Replace with your image
            style={styles.logo}
            resizeMode="contain"
          />
          
          <Text style={styles.title}>Forgot Password?</Text>
          
          <Text style={styles.subtitle}>
            Enter your email address and we'll send you a link to reset your password
          </Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <Ionicons 
              name="mail-outline" 
              size={20} 
              color={COLORS.grey} 
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor={COLORS.grey}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity 
            style={styles.button}
            onPress={handleResetPassword}
            disabled={!email}
          >
            <Text style={styles.buttonText}>Send Reset Link</Text>
          </TouchableOpacity>

          {/* Back to login link */}
          <TouchableOpacity 
            style={styles.backToLogin}
            onPress={() => router.replace('/(auth)')}
          >
            <Text style={styles.backToLoginText}>
              Remember your password? <Text style={styles.loginLink}>Log in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const forgotPasswordStyles = () => {
  const { COLORS } = useTheme();

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: COLORS.background2,
    },
    container: {
      flex: 1,
    },
    header: {
      padding: 20,
    },
    content: {
      flex: 1,
      paddingHorizontal: 30,
      justifyContent: 'center',
    },
    logo: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      marginBottom: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: COLORS.oppositeColor,
      marginBottom: 10,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: COLORS.grey,
      textAlign: 'center',
      marginBottom: 30,
      lineHeight: 22,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: COLORS.background,
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 12,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: COLORS.surfaceLight,
    },
    inputIcon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      color: COLORS.oppositeColor,
      fontSize: 16,
    },
    button: {
      backgroundColor: COLORS.primary,
      borderRadius: 10,
      padding: 15,
      alignItems: 'center',
      marginTop: 10,
      opacity: 1, // Change to 0.5 when disabled if you want
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    backToLogin: {
      marginTop: 20,
      alignSelf: 'center',
    },
    backToLoginText: {
      color: COLORS.grey,
    },
    loginLink: {
      color: COLORS.primary,
      fontWeight: 'bold',
    },
  });
};

export default ForgotPasswordScreen;