import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/create.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/Constants/theme'

export default function User( { usersName, avatar,bio,followers}: {usersName: string, bio:string, followers:number, avatar:any}) {

    const handleBack = ()=> {
        
    }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={handleBack} >
                <Ionicons name='arrow-back' size={24} color={COLORS.primary}/>
                
            </TouchableOpacity>
            <Text style={styles.headerTitle} > {usersName} </Text>
            <View />

        </View>

    </View>
  )
}