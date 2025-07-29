import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { styles } from '../styles/signInPage';
import { useAuthStore } from '@/Store/useAuthStore';
// 
const SignInScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { SignIn, loading, error, user } = useAuthStore();

   const handleSignIn = async () => {
   await SignIn(email, password);
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>SIGN IN</Text>

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

        <View style={styles.inputWrapper}>
          <FontAwesome name="lock" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleSignIn}
          disabled={loading}
                    >
            {loading ? (
                <View style={styles.loadingContainer}>
                  <ActivityIndicator color="#fff" size="small" />
                  <Text style={styles.loginButtonText2}>SIGNING IN...</Text>
                </View>
              ) : (
                <Text style={styles.loginButtonText}>SIGN IN</Text>
              )}
        </TouchableOpacity>

        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>
            Don't have an account?{' '}
          </Text>
          <Link href="/(auth)/signUp" asChild>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign up</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <TouchableOpacity onPress={() => router.push('/(auth)/forgotPassword')}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;