import { Text, Image, View, TouchableOpacity, ScrollView, FlatList, TextInput, } from "react-native";
import { styles } from "../styles/feed.styles";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/Constants/theme";
import { STORIES } from "@/Constants/mock-data";
// import story from "../components/story";
import Story from "../components/story";
// import Loader from "../components/Loader";
import { POSTS } from "@/Constants/mock-data.post";
import Post from "../components/post";
import { useState } from "react";
import SearchIcon from "../components/searchIcon";





export default function Index() {


  // if(posts === undefined) return <Loader />
  // if(posts.length === 0) return <NoPostsFoung />
  
  const [posts, setPosts] = useState (POSTS);

const handleDeletePost = (postId:string) => {
  let updatedPosts = setPosts(currentPost => currentPost.filter(post => post.id !==postId))

}

  return (
    <View
      style={styles.container} >
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Ulea</Text>
          <TouchableOpacity onPress={() => router.replace("/(auth)/profileSetup")}>
            <Ionicons name="log-out-outline" size={24} color={COLORS.white} />

          </TouchableOpacity>
        </View>
          
         
      


        <FlatList
         data={posts}
         renderItem={({ item }) =>  <Post  post={item}  
         onDelete={() => handleDeletePost(item.id)}/> }
         keyExtractor={(item) => item.id}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{ paddingBottom:66 }}
         ListHeaderComponent={<StoriesSection /> }
                
        />
   
    </View>
    
  );
};


const StoriesSection = () => {
  return ( 
    <View>
     <SearchIcon />

      <FlatList 
      horizontal
      data={STORIES}
      renderItem={({ item }) => <Story key={item.id} story={item} />}
      showsHorizontalScrollIndicator={false}
      style={styles.storiesContainer} 
        
        />
      
    </View>
  )
}

        {/* <Link href={"./notifications"}>David Hart first app</Link> */}

        {/* <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 66 }}
        > */}
          {/* STORIES */}
          
            
            
{/* //post . map for every single post show a post component */}

            {/* {POSTS.map( (post) =>  ( */}
            {/* //   <Post key={post.id} post={post} /> */}
            {/* // )) */}

            {/* // } */}





// const StoriesSection = () => {
//   return(
//      <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.storiesContainer}
//         > 
//       {STORIES.map( (story) => (
//             <Story key={story.id} story={story} />
//           ))} 
//           {/* story.map for every single story show a story component */}
//          </ScrollView> 
//   )
// }
