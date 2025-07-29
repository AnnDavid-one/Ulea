import { View, FlatList,Text } from 'react-native'
// import React, { useState } from 'react'
// import { styles } from '../styles/notification.styles'
// import { Image } from 'expo-image'
import UsersNotification from '../components/usersNotification'
import { UserNotificationData } from '@/Constants/mock-data-notification'
import { userNotificationStyles } from '../styles/notification.styles';
import { useTheme } from '../hooks/useTheme';

export default function Notifications() {

  //  const { COLORS } = useTheme();
  const styles = userNotificationStyles();


  return ( 
  <View style={styles.container}>
    <View style={styles.header}>
              <View style={{flexDirection:"column"}}>
                  <Text style={styles.notificationsH1}>Notifications</Text>
  {/* <UsersNotification />    */}
  </View>
  </View>

  <FlatList
           data={UserNotificationData}
           renderItem={({ item }) =>  <UsersNotification notification={item} /> }
           keyExtractor={(item) => item.id}
           showsVerticalScrollIndicator={false}
           contentContainerStyle={{ paddingBottom:66 }}
           
           
           />
    </View>
  )
}