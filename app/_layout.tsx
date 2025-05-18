import { StackActions } from "@react-navigation/native";
import { SplashScreen, Stack } from "expo-router";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts} from "expo-font"
import { useCallback } from "react";

// SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
// const [fontsLoaded] = useFonts({

//   "JetBrainsMono-Medium" : require("../assets/fonts/JetBrainsMono-Medium.ttf")

// })

// const onLayoutRootView = useCallback(async () => {
//   // if(!fontsLoaded) SplashScreen.hideAsync();

// }, [fontsLoaded])

  return (
      <SafeAreaProvider>
        <StatusBar backgroundColor={"black"} />
        {/* <SafeAreaView style={{flex:1, backgroundColor:"black"}} onLayout={onLayoutRootView}> */}
        <SafeAreaView style={{flex:1, backgroundColor:"black"}} >
    
       <Stack 
        screenOptions={{headerShown:false}}
        /> 
        </SafeAreaView>
      </SafeAreaProvider>
  

  )
}

