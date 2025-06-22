import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { styles } from '../styles/signInPage';
import { resetPassword } from '../../Services/authService';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    setLoading(true);
    const { error } = await resetPassword(email);
    setLoading(false);

    if (error) {
      Alert.alert('Error', error);
    } else {
      Alert.alert('Success', 'Password reset email sent. Please check your inbox.');
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>RESET PASSWORD</Text>
        <Text style={styles.subtitle}>Enter your email to receive a password reset link</Text>

        <View style={styles.inputWrapper}>
          <FontAwesome name="envelope" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleResetPassword}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? 'SENDING...' : 'SEND RESET LINK'}
          </Text>
        </TouchableOpacity>

        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>
            Remember your password?{' '}
          </Text>
          <Link href="/(auth)/signIn" asChild>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;