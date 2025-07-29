import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { styles } from '../styles/signInPage';
import { useAuthStore } from '@/Store/useAuthStore';

import { Image } from 'expo-image';
  
  


const SignUpScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const { register, loading, error, user } = useAuthStore();
  
 const handleSignUp = async () => {
   await register(email, password, displayName);
  };


  return (
    <View style={styles.container}>
      <View style={styles.card}>
      {user?.photoURL && (
        <Image 
          source={{ uri: user.photoURL }} 
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
        />
      )}
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
          <Link href="/(auth)">
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