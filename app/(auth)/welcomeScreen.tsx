import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/auth.styles'
import AppLogo from '../components/appLogo'
export default function welcomeScreen() {
  return (
    <View style={styles.appLogo_UNm}> 

        <AppLogo />
</View>
  )
}