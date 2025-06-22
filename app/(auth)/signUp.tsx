import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { styles } from '../styles/signInPage';
import { register } from '../../Services/authService';

const SignUpScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignUp = async () => {
    if (!email || !password || !displayName) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

        setLoading(true);
        const { user, error } = await register(email, password, displayName);
        setLoading(false);

              if (error) {
          Alert.alert('Error', error);
        } else if (user) {
          router.replace('/(auth)/profileSetup');
        }
   };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>SIGN UP</Text>

        <View style={styles.inputWrapper}>
          <FontAwesome name="user" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={displayName}
            onChangeText={setDisplayName}
            autoCapitalize="words"
          />
        </View>

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
          onPress={handleSignUp}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? 'CREATING ACCOUNT...' : 'SIGN UP'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or sign up with</Text>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={20} color="#3b5998" />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="google" size={20} color="#db4a39" />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>
            Already have an account?{' '}
          </Text>
          <Link href="/(auth)/SignIn" asChild>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;