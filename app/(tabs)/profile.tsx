import { View, Text, TouchableOpacity, ScrollView, FlatList, Modal, TouchableWithoutFeedbackComponent, Keyboard, Platform, KeyboardAvoidingView, TextInput, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/profile..styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/Constants/theme';
import { Image } from 'expo-image';
import { profilePost } from '@/Constants/mock-data-profilePost';
import User from '../components/users';
// import ProfilePost from '../components/profilePost';






  type Post = {
    id: string
    image: any
    caption?: string
    likes?: number
    comments?: number
  }


export default function Profile( ) {
const [isEditModalVisible, setIsEditModalVisible ] = useState(false);

const [ currentUser, setCurrentUser] = useState({
  userName:"David Hart",
  bio:"Hi, I'm David Hart, a software developer",
   Avatar:require("../../assets/pictures/myPic.jpg"),
  noOfPost:3,
  followers:2,
  following:2,


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
              <TouchableOpacity style={styles.headerIcon} onPress={() =>signOut()}> 
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
                  source={currentUser.Avatar}
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
                    <Text style={styles.editButtonText}>Edit Profile</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.shareButton} onPress={() => setIsEditModalVisible(true)}>
                  <Ionicons name="share-outline" size={20} color={COLORS.white}  />

                  </TouchableOpacity>


                </View>

          </View>
          {/* {currentUser.userName.length === 0 && <NoPostsFoung />} */}


          {currentUser.noOfPost === 0 ? (
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
        {/* EDIT PROFILEE MODAL */}

        <Modal
          visible={isEditModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsEditModalVisible(false)}
          >
            <ScrollView>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.modalContainer} 
                 keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}// i added this on 16tthe of may tot text something, but if it's nott working, delete or rremocce it
                

                >

                  <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                      <Text style={styles.modalTitle}>Edit  Profile </Text>
                      <TouchableOpacity
                      onPress={()=> setIsEditModalVisible(false)}
                      >
                        <Ionicons 
                        name="close"
                        size={24}
                        color={COLORS.white}
                        />

                      </TouchableOpacity>

                    </View>

                    <View style={styles.inputContainer}>
                      <Text style={styles.inputLabel}>Name</Text>
                               <TextInput 
                                style={styles.input}
                                value={editedProfile.fullname}
                                onChangeText={(text) => setEditedProfile(prev => ({...prev, fullname: text}))}
                                placeholder="Enter your name"
                                placeholderTextColor={COLORS.grey}
                                                    />
                    </View>

                    <View style={styles.inputContainer}>
                      <Text style={styles.inputLabel}>Bio</Text>
                      <TextInput 
                      style={[styles.input, styles.bioInput]}
                      value={editedProfile.bio}
                      onChangeText={(text) =>setEditedProfile((prev) => ({...prev, bio: text}))}
                      multiline
                      
                      numberOfLines={4}
                      placeholderTextColor={COLORS.grey}
                      />

                    </View>

                    <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
                      <Text style={styles.saveButtonText}>Save Changes</Text>

                    </TouchableOpacity>

                  </View>

              </KeyboardAvoidingView>
            </TouchableWithoutFeedback>


                      </ScrollView>
        </Modal>

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