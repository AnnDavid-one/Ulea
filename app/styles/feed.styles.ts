import { COLORS } from "@/Constants/theme"
import { Dimensions, Platform, StyleSheet } from "react-native"

const { width, height } = Dimensions.get("window");

export const styles= StyleSheet.create({
    

       container: {
        flex:1,
        backgroundColor: COLORS.background2,
        
      },


   header: {
    marginTop:16,
   display:"flex",
   flexDirection:"row",
justifyContent:"space-between",
paddingVertical:12,
paddingHorizontal:16,
borderBottomWidth  :0.5,
borderBottomColor:COLORS.surface,
alignItems:"center",
fontFamily:"JetBrainsMono-Medium",
 },

 headerTitle:{
   fontSize:24,
   fontFamily:"JetBrainsMono-Medium",
   color:COLORS.primary,     
 },

 searchContainer: {
  flexDirection:"row",
  alignItems:"center",
  backgroundColor:COLORS.surfaceLight,
  borderRadius:10,
  marginHorizontal:15,
  marginVertical:4,
  paddingHorizontal:15,
  height:40,

 },
 searchInput:{
  flex:1,
  fontSize:15,
  marginLeft:10,
  borderWidth:0,
  // outline:"none",
  // outlineColor:"none",
  borderColor:"none",
  // outlineStyle:"none",
  color:COLORS.white,
 outline:"none",
 backgroundColor:"transparent",
 


  

 },
 closeIcon:{
  marginLeft:10,

 },
 content:{flex:1,},

 storiesContainer:{
   paddingVertical:12,
   borderBottomWidth:1,
   borderBottomColor:COLORS.surfaceLight,     
 },

 storyWrapper: {
    alignItems:"center",
    justifyContent:"center",
    marginHorizontal:8,
    width:78,
    position:"relative",
   padding:2,

 },

 storyVerifyAvatarWrapper:{
  position:"absolute",
  zIndex:1,
  borderWidth:3,
  borderColor:COLORS.primary,
  // backgroundColor:COLORS.background2,
  height:53,
  width:55,
  padding:2,
  justifyContent:"center",
  alignItems:"center",
  borderRadius:25,
  top:10,
  left:3,


 },

 storyVerifyAvatar:{
  width:43,
  height:43,
  borderRadius:22,
 },

 storyRings:{
  width:80,
  height:148,
  borderRadius:30,
  padding:2,
  // backgroundColor:COLORS.background2,
  borderWidth:2,
  // borderColor:COLORS.primary,
  marginBottom:1,

 },

 noStory:{
  borderColor:COLORS.background2,
  borderWidth:3,

 },
 storyAvatar: {
  width:80,
  height:136,
  borderRadius:23,
  borderWidth:2,
  borderColor:COLORS.surface,
  // display:"none"

 },
 textContainer: {
   textAlign:"center",
   position:"absolute",
   bottom:17,
   right:6,
   padding:2,
   borderRadius:23,
   backgroundColor:'rgba(0,0,0,0.5)'
   

 },

 storyUsername: {
  fontSize:11,
  color:COLORS.white,


 },

 posts:{
  marginBottom:16,

 },

 postHeader:{
  flexDirection:"row",
  alignItems:"center",
  justifyContent:"space-between",
  padding:12,

 },

 postHearderLeft:{
  flexDirection:"row",
  alignItems:"center",
 },
postAvatar:{
  width:32,
  height:32,
  borderRadius:16,
  marginRight:8,
},
postUsername:{
  fontSize:14,
  fontWeight:"600",
  color:COLORS.white,
},

postImage:{
width: width,
height:width,
},
postActions:{
  flexDirection :"row",
  justifyContent:"space-between",
  alignItems:"center",
  paddingHorizontal:12,
  paddingVertical:12,
}, 

postActionsLeft: {
  flexDirection:"row",
  alignItems:"center",
},
postInfo: {
  paddingHorizontal:12,

},
likesText: {
  fontSize:14,
fontWeight:"600",
color:COLORS.white,
marginBottom:6,
},

captionContainer: {
  flexDirection:"row",
  flexWrap:"wrap",
  marginBottom:6,

},
captionUsername:{
  fontSize:14,
  fontWeight  : "600",
  color:COLORS.white,
  marginRight:6,
},

captionText: {
  fontSize:14,
  color:COLORS.white,
  flex:1,
},

commentsText: {
  fontSize:14,
  color:COLORS.grey,
  marginBottom:4,
},

timeAgo: {
  fontSize:12,
  color:COLORS.grey,
  marginBottom:8,
  },

modalContainer: {
  backgroundColor:COLORS.background,
  marginBottom: Platform.OS ==="ios" ? 44: 0,
  flex:1,
  marginTop:Platform.OS ==="ios" ? 44: 0,
},
modalHeader: {
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  paddingHorizontal:16,
  height:56,
  borderBottomWidth:0.5,
  borderBottomColor:COLORS.surface,
},

modalTitle: {
  color:COLORS.white,
  fontSize:16,
  fontWeight:"600",
},

commentsList: {
  flex:1,
},

commentContainer: {
  flexDirection:"row",
  paddingHorizontal:16,
  paddingVertical:12,
  borderBottomWidth:0.5,
  borderBottomColor:COLORS.surface,
},

commentAvatar: {
  width:32,
  height: 32,
  borderRadius:16,
  marginRight:12,
},
commentContent: {
  flex:1,

},

commentUsername: {
  color:COLORS.white,
  fontWeight:"500",
  marginBottom:4,

},

commentTexts: {
  color:COLORS.white,
  fontSize:14,
  lineHeight:20,

},
commentInput:{
  flexDirection:"row",
  alignItems:"center",
  paddingHorizontal:16,
  paddingVertical:12,
  
  borderTopWidth:0.5,
  borderTopColor:COLORS.surface,
  backgroundColor:COLORS.background,

},
input:{
  flex:1,
  color:COLORS.white,
  paddingVertical:8,
  paddingHorizontal:16,
  marginRight:12,
  borderRadius:20,
  backgroundColor:COLORS.surface,
  fontSize:14,
},

postButton:{
  color:COLORS.primary,
  fontWeight:"600",
  fontSize:14,
},
postButtonDisabled: {
  opacity:0.5,
},

centered:{
  justifyContent:"center",
  alignItems:"center",
},

});