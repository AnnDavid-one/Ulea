import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
// import { COLORS } from '@/Constants/theme'
// import { styles } from '../styles/feed.styles'
import { userPostStyles } from '../styles/feed.styles'
import { useTheme } from '../hooks/useTheme'

export default function SearchIcon() {


  const { COLORS } = useTheme();
  const styles = userPostStyles();
  
      const [searchQuery, setSearchQuery] =  useState<string> ("");
  const [isSearching, setIsSearching]= useState<boolean>(false)
  
  return (
    <View>
    
      {/* SEARCH ETC... */}
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color={COLORS.primary} />
              <TextInput 
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor={COLORS.grey}
              value={searchQuery}
              onChangeText={setSearchQuery}
              onFocus={()=> setIsSearching(true)}
              // onBlur={()=> setIsSearching(false)}
              underlineColorAndroid="transparent"
    
               />
               {isSearching && (
                <TouchableOpacity
                 onPress={() => {
                    setSearchQuery(""),
                    setIsSearching(false)
                  }}
                  style={{padding:9}}
                >
    
                  <Ionicons
                  style={styles.closeIcon}
                  size={16}
                  name="close"
                  color={COLORS.secondary2}
                 
                  />
                </TouchableOpacity>
               )}
    
            </View>
            {/* end of search icon */}
    </View>
  )
}