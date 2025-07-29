import React, { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from '@/Store/useAuthStore';
 import { auth } from '@/firebaseConfig';


// import { useAuth } from '../Services/AuthContext';
// import { isProfileComplete } from '../Services/authService';

export default function Index() {
  const setUser = useAuthStore ((state) => state.setUser);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) =>{
      if (firebaseUser) {
        setUser({ uid: firebaseUser.uid, email: firebaseUser.email });

      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  },[])
  // const { currentUser } = useAuth();
  
  // if (!currentUser) {
    return <Redirect href="/(tabs)" />;
  // }

//   return isProfileComplete(currentUser) 
//     ? <Redirect href="/(tabs)" /> 
//     : <Redirect href="/(auth)/profileSetup" />;
//   // <Redirect href="/(auth)/profileSetup"/>
}