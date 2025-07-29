// profile.tsx
import { View, Text, TouchableOpacity, ScrollView, FlatList, Modal, 
  TouchableWithoutFeedback, Keyboard, Platform, KeyboardAvoidingView, 
  TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useProfileStyles } from '../styles/profile..styles';
import { Ionicons } from '@expo/vector-icons';
// import { COLORS } from '@/Constants/theme';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../State/store';
import { initializeProfiles, updateProfile } from '../../State/profileSlice';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from '../components/ThemeToggle';

type Post = {
  id: string;
  image: any;
  caption?: string;
  likes?: number;
  comments?: number;
};

export default function Profile() {

  const { COLORS } = useTheme();
  const styles = useProfileStyles();


  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.profile);
  
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [editedProfile, setEditedProfile] = useState({
    fullname: currentUser?.userName || "",
    bio: currentUser?.bio || "",
  });

  // Initialize profiles when component mounts
  useEffect(() => {
    dispatch(initializeProfiles());
  }, [dispatch]);

  // Update editedProfile when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setEditedProfile({
        fullname: currentUser.userName,
        bio: currentUser.bio || "",
      });
    }
  }, [currentUser]);

  const handleSaveProfile = () => {
    if (currentUser) {
      dispatch(updateProfile({
        userName: editedProfile.fullname,
        bio: editedProfile.bio,
      }));
    }
    setIsEditModalVisible(false);
  };

  const renderPostItem = ({ item }: { item: Post }) => (
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
  );

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.username}>{currentUser.userName}</Text>
        </View>
        <View style={styles.headerRight}>
          <ThemeToggle />
          <TouchableOpacity 
            style={styles.headerIcon} 
            onPress={() => router.replace("/(auth)")}
          >
            <Ionicons name="log-in-outline" size={24} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileInfo}>
          {/* Avatar and Stats */}
          <View style={styles.avatarAndStats}>
            <View style={styles.avatarContainer}>
              <Image 
                source={currentUser.avatar}
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
            <TouchableOpacity 
              style={styles.editButton} 
              onPress={() => setIsEditModalVisible(true)}
            >
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name="share-outline" size={20} color={COLORS.white} />
            </TouchableOpacity>
          </View>
        </View>

        {currentUser.noOfPost === 0 ? (
          <NoPostsFound />
        ) : (
          <FlatList
            data={currentUser.posts}
            numColumns={3}
            scrollEnabled={false}
            renderItem={renderPostItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 66 }}
          />
        )}
      </ScrollView>

      {/* Edit Profile Modal */}
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
              keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            >
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Edit Profile</Text>
                  <TouchableOpacity onPress={() => setIsEditModalVisible(false)}>
                    <Ionicons name="close" size={24} color={COLORS.white} />
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
                    onChangeText={(text) => setEditedProfile(prev => ({...prev, bio: text}))}
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

      {/* Selected Image Modal */}
      <Modal 
        visible={!!selectedPost}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setSelectedPost(null)}
      >
        <View style={styles.modalBackdrop}>
          {selectedPost && (
            <View style={styles.postDetailContainer}>
              <View style={styles.postDetailHeader}>
                <TouchableOpacity onPress={() => setSelectedPost(null)}>
                  <Ionicons name='close' size={24} color={COLORS.white} />
                </TouchableOpacity>
              </View>
              <Image
                source={selectedPost.image}
                cachePolicy={"memory-disk"}
                style={styles.postDetailImage}
              /> 
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

function NoPostsFound() {
  const { COLORS } = useTheme();
  const styles = useProfileStyles();
  return (
    <View style={{
      height: "100%", 
      backgroundColor: COLORS.background2,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Ionicons name="image-outline" size={40} color={COLORS.primary} />
      <Text style={{ fontSize: 12, color: COLORS.white }}>No Post Found</Text>
    </View>
  );
}