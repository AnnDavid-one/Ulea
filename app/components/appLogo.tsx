import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/auth.styles'

export default function AppLogo() {
  return (

    <View style={styles.logoWrapper}>

      <Text style={styles.appLogo_U}>U</Text>
      <Text style={{ color:"white", fontSize:22}}>lea</Text>
    </View>
  )
}