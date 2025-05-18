import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '@/Constants/theme'
import { styles } from '../styles/notification.styles'
import { Dimensions, Platform, StyleSheet } from "react-native"

const { width, height } = Dimensions.get("window");

export default function Bookmarks() {
  return (
    <View style={{display:"flex", flex:1,backgroundColor:COLORS.background2}}>
      <View style={{justifyContent:"center",
        height:height,
        width:width,
        alignItems:"center",
        
        
      }}>

      <View style={{}}>
        <TouchableOpacity onPress={() => alert("your saved files will be gotten for the web!")}>

        <Text style={{alignContent:"center", color:COLORS.white, fontSize:12,

          borderRadius:2,
          borderTopColor:"red",
          borderColor:COLORS.primary,
          borderWidth :1,
          padding:21,
          
        }}> View all your saved files</Text>

        </TouchableOpacity>
      </View>
    </View>
      </View>
  )
}