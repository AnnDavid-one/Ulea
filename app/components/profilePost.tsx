


import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
// import { styles } from '../styles/profile..styles';

type profilePost = {
    id:string,
    image:string;
}



export default function ProfilePost({ post }: {post: profilePost}) {
  return (
    <View style={{ padding:12,}}>
     
          
                 <Image 
                   source={post.image}
                   style={{height:62, width:62,}}
                   contentFit='cover'
                   transition={200}
                   cachePolicy={"memory-disk"}
                 />
    </View>
  )
  
}