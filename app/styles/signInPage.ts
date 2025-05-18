import { COLORS } from "@/Constants/theme"
import { Dimensions, StyleSheet } from "react-native"
import { LightBackground } from "@/Constants/theme";
const { width, height } = Dimensions.get("window");




export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.background2, // Replace with Expo LinearGradient if needed
    backgroundColor: LightBackground.background2, // Replace with Expo LinearGradient if needed
    justifyContent: 'center',
    alignItems: 'center',
    // color:LightBackground.2
    
  },
  card: {
    backgroundColor: LightBackground.background3,
    // backgroundColor: COLORS.background3,
    borderRadius: 10,
    padding: 24,
    width: '85%',
    elevation: 6,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 24,
    // color:COLORS.signInText,
    color:LightBackground.signInText,

  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 16,
    paddingHorizontal: 10,
    
  },
  icon: {
    marginRight: 8,
    // color:COLORS.signInText,
    color:LightBackground.signInText,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    // color:COLORS.signInText,
    color:LightBackground.signInText,
    
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    // color:COLORS.secondary,
    color:LightBackground.secondary,

    
  },
  checkboxLabel: {
    marginLeft: 8,
    // color:COLORS.signInText,
    color:LightBackground.signInText,

  },
  loginButton: {
    backgroundColor: LightBackground.primary,
    // backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color:LightBackground.oppositeColor,
    // color:COLORS.pureWhite,
// 
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    
    // color: LightBackground.surfaceLight,
    marginBottom: 16,
    // color:COLORS.signInText,
    color:LightBackground.signInText,

  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: LightBackground.surface,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
    
  },
  socialText: {
    marginLeft: 6,
    // color:COLORS.signInText,
    color:LightBackground.signInText,
  },
  signupText: {
    textAlign: 'center',
    color:LightBackground.signInText,
    // color:COLORS.signInText,

  },
  signupLink: {
    // color: COLORS.primary,
    color: LightBackground.primary,
    fontWeight: 'bold',
    marginHorizontal:2,
    marginTop:3,
  },
});
