import { View, Text, TouchableOpacity, ScrollView, FlatList, Modal, TouchableWithoutFeedbackComponent, Keyboard, Platform, KeyboardAvoidingView, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/profile..styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/Constants/theme';
import { Image } from 'expo-image';
import { profilePost } from '@/Constants/mock-data-profilePost';
import User from '../components/users';
import { router } from 'expo-router';
// import ProfilePost from '../components/profilePost';
import { useLocalSearchParams } from 'expo-router';





type Post ={
    id: string
    image:string| number,
    caption?: string
    likes?: number
    comments?: number   
      // id:string;
    // userId:string,
    // // authorName:string,
    // avatar: string | number; // string for URI, number for require()
    // // caption:string,
    // followers: number,
    // following:number,
    // bio:string,
    // noOfPost:number,
    // image:any,
  
  
    // hasPosted:boolean,    
    };


export default function Profile( ) {
    const params = useLocalSearchParams();

// 


const [isEditModalVisible, setIsEditModalVisible ] = useState(false);

const [ currentUser, setCurrentUser] = useState({
  userName:params.userName,
  bio:params.bio,
  image: params.avatar, // This will be string (URI) or number (require)
   noOfPost: parseInt(String(params.noOfPost)) || 0, // 
  followers:params.followers,
  following:params.following,
  id:String(params.id),
//   userId: params.userId,


})
const [editedProfile, setEditedProfile ] = useState({
  fullname:currentUser?.userName || " ",
  bio:currentUser?.bio,
});

const [selectedPost, setSelectedPost] =useState<Post | null> (null);


const handleSaveProfile = () => {
  setCurrentUser(prev => ({
    ...prev,  // Keep all existing properties
    userName: editedProfile.fullname,  // Update only the changed fields
    bio: editedProfile.bio
  }));
  setIsEditModalVisible(false);
}
//handle profile saving

const renderPostItem = ({ item }: {item:Post}) =>(
  <TouchableOpacity 
      style={styles.gridItem}
      onPress={() => setSelectedPost(item)}
    >
      <Image 
        source={item.image}
        style={styles.gridImage}
        contentFit='cover'
        transition={200}
      />
    </TouchableOpacity>



)



  return (
    <View style={styles.container}>
      {/*header */}
      
      <View style={styles.header}>
            <View style={styles.headerLeft} >
              <Text style={styles.username}>{currentUser.userName}</Text>


            </View>
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.headerIcon} onPress={() =>router.back()}> 
                  <Ionicons name="log-in-outline" size={24} color={COLORS.white}  />
              </TouchableOpacity>

            </View>
        </View>



        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileInfo}>
            {/* AVATER AND STATS */}

            <View style={styles.avatarAndStats}>
              <View style={styles.avatarContainer}>
              <Image 
                source={typeof currentUser.image === 'string' ? 
                    { uri: currentUser.image } : 
                    currentUser.image
                }
                style={styles.avatar}
                contentFit='cover'
                transition={200}
                />
              </View>
                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                      <Text style={styles.statNumber}>{currentUser.noOfPost}</Text>
                      <Text style={styles.statLabel}>Post</Text>

                    </View>
                    <View style={styles.statItem}>
                      <Text style={styles.statNumber}>{currentUser.followers}</Text>
                      <Text style={styles.statLabel}>Followers</Text>

                    </View>
                    <View style={styles.statItem}>
                      <Text style={styles.statNumber}>{currentUser.following}</Text>
                      <Text style={styles.statLabel}>Following</Text>

                    </View>
                    

                </View>
            </View>

                <Text style={styles.name}>{currentUser.userName}</Text>
                {currentUser.bio && <Text style={styles.bio}>{currentUser.bio}</Text>}

                <View style={styles.actionBottons}>
                  <TouchableOpacity style={styles.editButton} onPress={() => setIsEditModalVisible(true)}>
                    <Text style={styles.editButtonText}>{currentUser.userName}'s post's</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.shareButton} onPress={() => setIsEditModalVisible(true)}>
                  <Ionicons name="share-outline" size={20} color={COLORS.white}  />

                  </TouchableOpacity>


                </View>

          </View>
          {/* {currentUser.userName.length === 0 && <NoPostsFoung />} */}

          {/* <User authorName={currentUser.userName} authorBio={currentUser.bio} followers={currentUser.followers} avatar={currentUser.avatar}  /> */}

          { currentUser.noOfPost < 1 ? (
          <NoPostsFound />
        ) : (
          <FlatList
            data={profilePost}
            numColumns={3}
            scrollEnabled={false}
            renderItem={renderPostItem }
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 66 }}
          />
        )}


        {/* USE THESE CODES FOR INLINE RENDERING OF COMOPONENTS IN FLATLISTS */}
        {/* <FlatList
                   data={profilePost}
                   numColumns={3}
                   scrollEnabled={false}
                   renderItem={({ item }) =>  (
                      <TouchableOpacity style={styles.gridItem}
                       onPress={() => setSelectedPost(item)}>
                        <Image 
                          source={item.image}
                          style={styles.gridImage}
                          contentFit='cover'
                          transition={200}
                        />

                      </TouchableOpacity>

                   ) }
                   keyExtractor={(item) => item.id}
                   showsVerticalScrollIndicator={false}
                   contentContainerStyle={{ paddingBottom:66 }}
                   
                  
                  
                  /> */}

        </ScrollView>

        
        {/* SELECTED IMAGE MODAL */}
        <Modal 
        visible={!!selectedPost}
        animationType="fade"
        transparent={true}
        onRequestClose={() =>setSelectedPost(null)}
        >
          <View style={styles.modalBackdrop}>
            {selectedPost && (
              <View style={styles.postDetailContainer} >
                <View style={styles.postDetailHeader}>
                  <TouchableOpacity onPress={() => setSelectedPost(null)}>
                    <Ionicons name='close' size={24}  color={COLORS.white} />
                  </TouchableOpacity>
                </View>

                <Image
                source={selectedPost.image}
                cachePolicy={"memory-disk"}
                style={styles.postDetailImage}
                
                /> 

                 </View>
            )

            }


          </View>

        </Modal>
    </View>
  )
};



 function NoPostsFound() {
  return(
    <View
      style={{height:"100%", 
        backgroundColor:COLORS.background2,
        justifyContent:"center",
        alignItems:"center",
      }}
    >
                  <Ionicons name="image-outline" size={40} color={COLORS.primary}  />
                  <Text style={{ fontSize:12, color:COLORS.white}}>No Post Found</Text>

    </View>
  )
}