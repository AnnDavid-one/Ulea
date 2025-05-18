// import { View, Text, Image, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { styles } from '@/app/styles/auth.styles'
// import { Ionicons } from '@expo/vector-icons'
// import { COLORS } from '@/Constants/theme'
// import { Redirect, Stack, useRouter } from 'expo-router'





// export default function login() {
//   // const { isSignedIn } = useAuth()

//   // if (isSignedIn) {
//   //   return <Redirect href={'/'} />

   
//   // }   
//   //   const {startSSOFlow} = useSSO()
//   //   const router = useRouter();

//   //     const handleGoogleSignIn = async () => {

//   //       try {
//   //         const { createdSessionId, setActive } = await startSSOFlow({strategy:"oauth_google"})
//   //         if ( setActive && createdSessionId){
//   //           setActive({ session: createdSessionId });
//   //           router.replace{};
//   //         }
        
//   //       } catch (error) {

//   //         console.error("OAuth error:", error);
          
//   //       }
//   //     }

//   return (
//     <View style={styles.container}>
//       {/* BRAND SECTION */}
//       <View style={styles.brandSection}>
//         <View style={styles.logoContainer}>
//             <Ionicons name='leaf' size={32} color={COLORS.primary} />
//                 </View>
//                 <Text style={styles.appName}> VB-3</Text>
//                 <Text style={styles.tagline}>don't miss anything</Text>
//       </View>

//       {/* ILLUSTRACTION */}
//       <View style={styles.illustrationContainer}>
//           <Image source={require("../../assets/images/auth_screen2.png")}
//           style={styles.illustration}
//           // resizeMode='contain' this still works but it makes it fit the screen smaller
//           resizeMode='cover'
//           />
//       </View>
//       <View style={styles.loginSection}>
//         <TouchableOpacity
//         style={styles.googleButton}
//         // onPress={handleGoogleSignIn}
//         activeOpacity={0.9}
//         >

//           <View style={styles.googleIconContainer}>
//               <Ionicons name ='logo-google' size={20} color={COLORS.surface} />
//           </View>

//          <Text style={styles.googleButtonText}>Continue with Google</Text>
//         </TouchableOpacity>

//         <Text style={styles.termsText }>
//           By continuing, you agree to our Terms and Privacy Policy
//         </Text>
//       </View>

//     </View>
//   )
// }