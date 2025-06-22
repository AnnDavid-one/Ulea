import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/feed.styles'
import { Link } from 'expo-router'
import { Image } from 'expo-image'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/Constants/theme'
import CommentsModal from './CommentsModal'
// import { POSTS } from '@/Constants/mock-data.post'
import { Router } from 'expo-router'


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
    : "Be the first to like";

  const commentText = commentsCount > 0
    ? `View all ${commentsCount} comment${commentsCount !== 1 ? 's' : ''}`
    : "No comments yet";

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
        <TouchableOpacity onPress={()=> handleDelete()}>

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
       
      {/* POST ACTIONS */}
      <View style={styles.postActions}>
        <View style={styles.postActionsLeft}>
          <TouchableOpacity onPress={handleLikes}>
            <Ionicons 
              name={isLiked ? "heart" : "heart-outline"} 
              size={24} 
              color={isLiked ? COLORS.background : COLORS.white}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowComments(true)}>
            <Ionicons name="chatbubble-outline" size={22} color={COLORS.white}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={22} color={COLORS.white}/>
        </TouchableOpacity>
      </View>

      {/* POST INFO */}
      <View style={styles.postInfo}>
        <Text style={styles.likesText}>{likeText}</Text>
        
        {post.caption && (
          <View style={styles.captionContainer}>
            <Text style={styles.captionUsername}>{post.authorName}</Text>
            <Text style={styles.captionText}>{post.caption}</Text>
          </View> 
        )}

        <TouchableOpacity onPress={() => setShowComments(true)}>
          <Text style={styles.commentTexts}>{commentText}</Text>
        </TouchableOpacity>
        
        <Text style={styles.timeAgo}>2 hours ago</Text>
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