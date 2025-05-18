import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, CheckBox } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { styles } from '../styles/signInPage';



const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // TODO: Handle login logic
    console.log('Logging in with', email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>LOGIN</Text>

        <View style={styles.inputWrapper}>
          <FontAwesome name="envelope" size={20} color="#999" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
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

        <View style={styles.checkboxContainer}>
          {/* <CheckBox value={rememberMe} onValueChange={setRememberMe} /> */}
          <Text style={styles.checkboxLabel}>Remember me</Text>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or login with</Text>

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

        <Text style={styles.signupText}>
          Not a member? 
              <Link href="/(auth)/signUp" >
           <TouchableOpacity>
           <Text style={styles.signupLink} >Sign up now</Text>
              
            </TouchableOpacity>
              </Link>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
