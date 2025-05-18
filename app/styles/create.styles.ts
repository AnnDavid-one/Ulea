import { COLORS } from "@/Constants/theme"
import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get("window");

export const styles= StyleSheet.create({
       //FOR CREATE TAB

       container: {
        flex:1,
        backgroundColor: COLORS.background2,
      },
      contentContainer:{
        flex:1,
      },

   header: {
    marginTop:23,
   display:"flex",
   flexDirection:"row",
justifyContent:"space-between",
paddingVertical:12,
paddingHorizontal:16,
borderBottomWidth  :0.5,
borderBottomColor:COLORS.surface,
alignItems:"center",
 },
 headerTitle:{
    fontSize:18,
    fontWeight:"600",
    color:COLORS.white,
 },
 contentDisabled:{
    opacity:0.7,
 },

 shareButton:{
    paddingHorizontal:12,
    paddingVertical:6,
    minWidth:60,
    alignItems:"center",
    justifyContent:"center",

 },

 shareButtonDisabled:{
opacity: 0.5,
 },

 shareText:{
    color:COLORS.primary,
    fontSize:16,
    fontWeight:"600",
 },
 shareTextDisabled:{
    color:COLORS.grey
 },

 emptyImageContainer:{
   flex:1,
    
   justifyContent:"center",
   alignItems:"center",
   gap:12,
//    marginVertical:"auto",
   
 },
 emptyImageText:{ 
    color:COLORS.grey,
    fontSize:16,
  },

 content:{
    flex:1,
 },
 scrollContent:{
    flexGrow:1,
    paddingBottom:67,
 },

 imageSection:{
    width:width,
    height:width,
    backgroundColor:COLORS.surface,
    justifyContent:"center",
    alignItems:"center"
    
 },
 previewImage:{
    width:"100%",
    height:"100%"
 },

 changeImageButton: {
    position: "absolute",
    bottom:16,
    right:16,
    backgroundColor:"rgba(0, 0, 0, 0.75)",
    flexDirection:"row",
    alignItems:"center",
    padding:8,
    borderRadius:8,
    gap:6,


 },

 

 changeImageText:{
    color:COLORS.white,
    fontSize:14,
    fontWeight:"500",
 },
 inputSection:{
    padding:16,
    flex:1,
 }
 ,


captionContainer:{
    flexDirection:"row",
    alignItems:"flex-start"
}
 ,
 userAvatar:{
    width:36,
    height  :36,
    borderRadius:18,
    marginRight:12,
 },

 captionInput:{
    flex:1,
    color:COLORS.white,
    fontSize:16,
    paddingTop:8,
    minHeight:48,
 }

}); 