import { COLORS } from "@/Constants/theme"
import { Dimensions, Platform, StyleSheet } from "react-native"

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:COLORS.background2,

    },

      header: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:16,
        paddingVertical:12,
        borderBottomWidth:0.5,
        borderBottomColor:COLORS.surface,




    },  
    headerLeft: {
        flexDirection:"row",
        alignItems:"center",


    }, 
    content:{
        marginBottom:2
    },

    notificationsH1: {
        fontSize:20,
        fontWeight:"700",
        color:COLORS.white,



    },
    notificationText: {
        color:COLORS.white,
        fontSize:12,
         fontWeight:"600",
         width:width*0.94, 
         


    },
    notificationPressWrapper:{

                        backgroundColor:"#2c2c2cbd",
        // display:"flex",
        flexDirection:"column",
        
        paddingVertical:23,
        paddingHorizontal:2,
        // borderRadius:11,
        gap:2,
        height:84,
        // marginHorizontal:"2%",
        // position:"relative",
        borderBottomWidth:1,
        borderBottomColor:COLORS.surfaceLight,  
        marginBottom:0, 
        
    },
    notificationPress:{
        // position:"absolute",
        flexDirection:"row",
        alignItems:"center",
        gap:14,
        paddingHorizontal:2,
        width:width, 
        // backgroundColor:"red",
        
        // backgroundColor:"red"
        
    },

    notifications: {
        paddingTop:2,
        marginLeft:3,
        // position:"absolute",


    },

    avatar:{
        height:38,
        width:38,
          borderRadius: 19, // ✅ 38/2 = 19
        borderColor:COLORS.primary,
        borderWidth:2,
    }
})