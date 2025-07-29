// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
// import { router } from 'expo-router';
// import { updateProfile } from 'firebase/auth';
// // import { auth } from '../../Services/firebaseConfig';
// import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { ref as databaseRef, set, update } from 'firebase/database';
// // import { database } from '../../Services/firebaseConfig';
// import { styles } from '../styles/profileSetup';

// interface UserProfile {
//   displayName: string;
//   bio: string,
//   photoURL?: string |null,
//   uid: string,
// }

// const ProfileSetupScreen = () => {
//   const [profile, setProfile] = useState<UserProfile>({
//     displayName: '',
//     bio: '',
//     photoURL:null,
//     uid: auth.currentUser?.uid || ''
//   });
//   const [loading, setLoading] = useState(false);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.canceled && result.assets[0].uri) {
//       setProfile(prev => ({ ...prev, photoURL: result.assets[0].uri }));
//     }
//   };

//   const uploadImage = async (uri: string) => {
//     const response = await fetch(uri);
//     const blob = await response.blob();
//     const storage = getStorage();
//     const fileRef = storageRef(storage, `profilePics/${auth.currentUser?.uid}`);
//     await uploadBytes(fileRef, blob);
//     return await getDownloadURL(fileRef);
//   };

//   const saveUserProfile = async (profileData: UserProfile) => {
//     try {
//       // Save to Realtime Database
//       const userRef = databaseRef(database, `users/${profileData.uid}`);
//       await set(userRef, {
//         displayName: profileData.displayName,
//         bio: profileData.bio,
//         photoURL: profileData.photoURL || null,
//         createdAt: new Date().toISOString()
//       });
//     } catch (error) {
//       throw error;
//     }
//   };

//   const handleCompleteProfile = async () => {
//     if (!profile.displayName) {
//       Alert.alert('Error', 'Please enter your name');
//       return;
//     }

//     setLoading(true);
//     try {
//       let photoURL = profile.photoURL;
      
//       // Upload image if new one was selected
//       if (profile.photoURL && profile.photoURL.startsWith('file://')) {
//         photoURL = await uploadImage(profile.photoURL);
//       }

//       // Update Firebase Auth profile
//       if (auth.currentUser) {
//         await updateProfile(auth.currentUser, {
//           displayName: profile.displayName,
//           photoURL: photoURL || undefined
//         });
//       }

//       // Save to Realtime Database
//       await saveUserProfile({
//         ...profile,
//         photoURL: photoURL || null,
//         uid: auth.currentUser?.uid || ''
//       });

//       router.replace('/(tabs)');
//     } catch (error: any) {
//       Alert.alert('Error', error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Complete Your Profile</Text>
      
//       <TouchableOpacity onPress={pickImage} style={styles.profileImageContainer}>
//         {profile.photoURL ? (
//           <Image source={{ uri: profile.photoURL }} style={styles.profileImage} />
//         ) : (
//           <View style={styles.profileImagePlaceholder}>
//             <FontAwesome name="user" size={50} color="#999" />
//           </View>
//         )}
//         <Text style={styles.changePhotoText}>Change Photo</Text>
//       </TouchableOpacity>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Display Name</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter your name"
//           value={profile.displayName}
//           onChangeText={(text) => setProfile(prev => ({ ...prev, displayName: text }))}
//         />
//       </View>

//       <View style={styles.inputContainer}>
//         <Text style={styles.label}>Bio</Text>
//         <TextInput
//           style={[styles.input, styles.bioInput]}
//           placeholder="Tell us about yourself"
//           value={profile.bio}
//           onChangeText={(text) => setProfile(prev => ({ ...prev, bio: text }))}
//           multiline
//           numberOfLines={3}
//         />
//       </View>

//       <TouchableOpacity 
//         style={styles.button}
//         onPress={handleCompleteProfile}
//         disabled={loading}
//       >
//         {loading ? (
//           <ActivityIndicator color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Complete Profile</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ProfileSetupScreen;