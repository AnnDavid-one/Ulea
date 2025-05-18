
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/notification.styles'
import { Image } from 'expo-image'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);


 type notification = {
    id:string,
    avatar:any,
        notificationText:string,
        timestamp:string,
 }
       



export default function UsersNotification( {notification} : { notification: notification}) {

  let todaysDate = new Date().toUTCString()

      
  const [ notificationHour, setNotificationHour ] = useState<any>(Date.now().toString(),)


  return (
        <><View style={styles.content}>
          <View style={styles.headerLeft}>
              {/* <Text style={styles.notificationsH1}>Notifications</Text> */}
          </View>
      </View><View style={styles.notificationPressWrapper}>
              <View style={styles.notifications}>
                  <TouchableOpacity style={styles.notificationPress}>
                    <View style={styles.notifyLeft}>

                      <Image
                          source={notification.avatar}
                          style={styles.avatar}
                          contentFit="cover"
                          transition={200} />
                    </View>
                    <View style={styles.notifyRight}>
                      <Text style={styles.notificationText}>{notification.notificationText}</Text>
              <Text style={styles.notificationText}>{todaysDate}</Text>

                    </View>
                  </TouchableOpacity>
              </View>
          </View></>
  )
}
