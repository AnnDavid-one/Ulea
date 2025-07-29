import { userPostStyles } from "../styles/feed.styles";
import { Text, TouchableOpacity, View, } from "react-native";
import { Image } from "react-native";
import { useTheme } from "../hooks/useTheme";


type Story ={
id:string;
username:string,
avatar:any;
hasStory:boolean,    
};

export default function Story ( { story }: { story: Story }) {
  const { COLORS } = useTheme();
  const styles = userPostStyles();

    return(
            
        
        <TouchableOpacity
        style={styles.storyWrapper}
        >
             {/* <View style={[styles.storyRings, !story.hasStory && styles.noStory]}> */}
                {/* <Image 
                source={story.avatar}
                style={styles.storyAvatar}
                 blurRadius={2}

                />  */}
               <TouchableOpacity
                 style={styles.storyVerifyAvatarWrapper}
                            >
             
                   <Image 
                 style={styles.storyVerifyAvatar}
                 source={story.avatar}
                 resizeMode="cover"
                
                      />
                
                    </TouchableOpacity>
             {/* </View> */}
                <View style={styles.textContainer}>
             <Text style={styles.storyUsername} numberOfLines={1} ellipsizeMode="tail">{story.username}</Text>

                </View>

        </TouchableOpacity>
    )

}