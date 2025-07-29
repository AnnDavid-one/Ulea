import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useTheme';

const VerificationScreen = ({ navigation, route }: { navigation: any; route: any; }) => {
  const { COLORS } = useTheme();
  const styles = verificationStyles();
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const email = route.params?.email || 'example@email.com'; // Comes from forgot password screen

  const handleCodeChange = (text: string, index: number) => {
    // Auto focus to next input
    if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
    
    // Update code state
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    
    // Submit automatically if last digit entered
    if (text.length === 1 && index === 3) {
      Keyboard.dismiss();
    }
  };

  const handleVerify = () => {
    const verificationCode = code.join('');
    console.log('Verification code:', verificationCode);
    // Add your verification logic here
    // navigation.navigate('ResetPassword', { email, code: verificationCode });
  };

  const handleResend = () => {
    console.log('Resend code to:', email);
    // Add resend logic here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <Ionicons name="lock-closed" size={60} color={COLORS.primary} />
          </View>

          <Text style={styles.title}>Verification</Text>
          
          <Text style={styles.subtitle}>
            We've sent a verification code to {'\n'}
            <Text style={styles.emailText}>{email}</Text>
          </Text>

          {/* OTP Input Fields */}
          <View style={styles.otpContainer}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={[
                  styles.otpInput,
                  code[index] && { borderColor: COLORS.primary }
                ]}
                value={code[index]}
                onChangeText={(text) => handleCodeChange(text, index)}
                keyboardType="number-pad"
                maxLength={1}
                textContentType="oneTimeCode"
                autoFocus={index === 0}
              />
            ))}
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            style={[
              styles.button,
              code.join('').length < 4 && styles.buttonDisabled
            ]}
            onPress={handleVerify}
            disabled={code.join('').length < 4}
          >
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>

          {/* Resend Code */}
          <TouchableOpacity onPress={handleResend}>
            <Text style={styles.resendText}>
              Didn't receive code? <Text style={styles.resendLink}>Resend</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const verificationStyles = () => {
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
    iconContainer: {
      alignItems: 'center',
      marginBottom: 30,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: COLORS.oppositeColor,
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      color: COLORS.grey,
      textAlign: 'center',
      marginBottom: 40,
      lineHeight: 22,
    },
    emailText: {
      fontWeight: 'bold',
      color: COLORS.oppositeColor,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 40,
    },
    otpInput: {
      width: 60,
      height: 60,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: COLORS.surfaceLight,
      backgroundColor: COLORS.background,
      color: COLORS.oppositeColor,
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    button: {
      backgroundColor: COLORS.primary,
      borderRadius: 10,
      padding: 15,
      alignItems: 'center',
    },
    buttonDisabled: {
      opacity: 0.5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    resendText: {
      color: COLORS.grey,
      textAlign: 'center',
      marginTop: 20,
    },
    resendLink: {
      color: COLORS.primary,
      fontWeight: 'bold',
    },
  });
};

export default VerificationScreen;