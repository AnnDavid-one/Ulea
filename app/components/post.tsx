import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { userPostStyles } from '../styles/feed.styles'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
// import { COLORS } from '@/Constants/theme'
import CommentsModal from './CommentsModal'
// import { POSTS } from '@/Constants/mock-data.post'
import { Router } from 'expo-router'
import { useTheme } from '../hooks/useTheme'


// type Post ={
//   id:string;
//   authorName:string,
//   avatar:Image;
//   caption:string,
//   hasPosted:boolean,    
//   };

type PostProps = {
  post: {
    id: string;
    authorName: string;
    avatar: any;
    caption: string;
    followers: number;
    following: number;
    bio: string;
    noOfPost: number;
    userId: string;
  };
  onDelete: () => void;
};

// todo: add the actual type

// ... (keep your existing imports)

export default function Post({ post, onDelete }: PostProps) {

  const { COLORS } = useTheme();
  const styles = userPostStyles();


  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(2); // Initial count from mock data
  const [showComments, setShowComments] = useState(false);
  
  const handleLikes = () => {
    if (isLiked) {
      setLikesCount(prevCount => prevCount - 1);
    } else {
      setLikesCount(prevCount => prevCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleDelete = () => {
    onDelete();  
  };


  const likeText = likesCount > 0 
    ? `${likesCount} like${likesCount !== 1 ? 's' : ''}` 
    : "0";

  const commentText = commentsCount > 0
    ? `${commentsCount} ${commentsCount !== 1 ? 'comments' : 'comment'}`
    : "No comments";

  return (
    <View style={styles.posts}>
      {/* POST HEADER */}
      <View style={styles.postHeader}>
        <Link href={{
          pathname: "../components/userProfile",
          params:{
            userId:post.id,
            image:post.avatar,
        
            userName: post.authorName,
            bio: post.bio || "No bio",
            followers: post.followers || 0,
            following: post.following || 0,
            noOfPost:post.noOfPost,
          }        }} asChild>

            {/* USER PIC AND */}
          <TouchableOpacity style={styles.postHearderLeft}>
            <Image 
              source={post.avatar}
              style={styles.postAvatar}
              contentFit='cover'
              transition={200}
              cachePolicy={"memory-disk"}
            />

            <Text style={styles.postUsername}>{post.authorName}</Text>

          </TouchableOpacity>
        </Link>
        <TouchableOpacity onPress={()=> handleDelete()} style={styles.handleDelete}>

          {/* Delete button */}
          <Ionicons name='trash-outline' size={20} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image 
        source={post.avatar}
        style={styles.postImage}
        contentFit='cover'
        transition={200}
        cachePolicy="memory-disk"
      />
      {/* POST INFO */}
      <View style={styles.postInfo}>
        
        {post.caption && (
          <View style={styles.captionContainer}>
            {/* <Text style={styles.captionUsername}>{post.authorName}</Text> */}
            <Text style={styles.captionText}>{post.caption}</Text>
            <Text style={styles.timeAgo}>2 hours ago</Text>
          </View> 
        )}

        <TouchableOpacity onPress={() => setShowComments(true)}>
        </TouchableOpacity>
        
      </View>
       
      {/* POST ACTIONS */}
      <View style={styles.postActions}>
        <View style={styles.postActionsLeft}>
          <TouchableOpacity onPress={handleLikes}>
            <Ionicons 
              name={isLiked ? "star" : "star-outline"} 
              size={24} 
              color={isLiked ? COLORS.primary : COLORS.white}
            />
          </TouchableOpacity>
        <Text style={styles.likesText}>{likeText}</Text>
          <TouchableOpacity style={styles.commentWrapper} onPress={() => setShowComments(true)}>
            <Ionicons name="chatbubble-outline" size={22} color={COLORS.white}/>
          <Text style={styles.commentTexts}>{commentText}</Text>
            {/* <Text style={styles.commentsText2 }>View Comments</Text> */}
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={22} color={COLORS.white}/>
        </TouchableOpacity>
      </View>


      {/* // Update your Post.tsx to include initial comments */}
<CommentsModal
  postId={post.id}
  visible={showComments}
  onClose={() => setShowComments(false)}
  onCommentAdded={() => setCommentsCount(prev => prev + 1)}
  initialComments={[
    {
      id: '1',
      text: 'Nice post!',
      username: 'user123',
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      likes: 3,
      avatar: post.avatar // Reuse post avatar for mock data
    },
    {
      id: '2',
      text: 'Where was this taken?',
      username: 'traveler22',
      timestamp: new Date(Date.now() - 1800000).toISOString(),
      likes: 1,
      avatar: post.avatar
    }
  ]}
/>
    </View>
  );
}