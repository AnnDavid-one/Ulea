import { COLORS } from "@/Constants/theme"
import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get("window");


export const styles= StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.background2,
  },
    illustration: {
      width:width * 0.05,
      height:height * 0.005,
      maxHeight:1,
    },

    // loginSection:{
    //   width:"100%",
    //   paddingHorizontal:24,
    //   paddingBottom:40,
    //   alignItems:"center",

    // },

    // googleButton: {
    //   flexDirection:"row",
    //   alignItems:"center",
    //   backgroundColor: COLORS.white,
    //   paddingVertical:16,
    //   paddingHorizontal:24,
    //   borderRadius:14,
    //   marginBottom:20,
    //   width:"100%",
    //   maxWidth:300,
    //   shadowColor:"#000",
    //   shadowOffset: {
    //     width:0,
    //     height:4,
    //   },
    //   shadowOpacity: 0.15,
    //   shadowRadius:12,
    //   elevation:5,

    // },

    // googleIconContainer:{
    //   width:24,
    //   height:24,
    //   justifyContent:"center",
    //   alignItems:"center",
    //   marginRight:12,
    // },

    // googleButtonText: {
    //   fontSize:16,
    //   fontWeight:"600",
    //   color:COLORS.surface,

    // },

    // termsText: {
    //   textAlign:"center",
    //   fontSize:12,
    //   color:COLORS.grey,
    //   maxWidth:280,
    // },

    //this is the sign in styles
    signInContainer: {
      flex:1,
      backgroundColor:COLORS.background,
      

    },

    formWrapper:{
      alignItems:"center",
      marginTop:height * 0.12, //means let it takee 12% of the height of the screen
    },
    logoWrapper_signIn:{
      width:width*0.3,
      backgroundColor:"red",padding:4,
      overflow:"hidden",
    },

    // welcome screen and components
    appLogo_UNm: {
      flex:1,
      backgroundColor:COLORS.background2,
      alignContent:"center",
      justifyContent:"center",

      
    },
    logoWrapper: {
      display:"flex",
      flexDirection:"row",
      alignSelf:"center",
      borderWidth:2,
      borderColor:COLORS.white,
      borderRadius:4,
    },

    appLogo_U:{
      fontWeight:"bold",
      fontSize:70,
      color:"white",
     
    },
    

 
    })