// components/Comment.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CommentComponentProps } from '../../Constants/comment';
import { Image } from 'expo-image';
import { useTheme } from '../hooks/useTheme';
// import { useProfileStyles } from '../styles/profile..styles';
// import { userPostStyles } from '../styles/feed.styles';



const Comment: React.FC<CommentComponentProps> = ({ comment, onLikePress }) => {
  const { COLORS } = useTheme();
    const styles = userCommentStyles();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {comment.avatar && (
          <Image 
            source={ comment.avatar }
            style={styles.avatar}
           contentFit='cover'

          />
        )}
        <Text style={styles.username}>{comment.username}</Text>
      </View>
      
      <Text style={styles.text}>{comment.text}</Text>
      
      <View style={styles.footer}>
        <Text style={styles.timestamp}>
          {new Date(comment.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
        <TouchableOpacity onPress={onLikePress} style={styles.likeButton}>
          <Ionicons 
            name="heart-outline" 
            size={16} 
            color={COLORS.white} 
          />
          <Text style={styles.likeCount}>{comment.likes}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const userCommentStyles = () => {
  const { COLORS } = useTheme();

  return StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    fontWeight: 'bold',
    color: COLORS.white,
  },
  text: {
    color: COLORS.white,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timestamp: {
    fontSize: 12,
    color: COLORS.grey,
    marginRight: 16,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    fontSize: 12,
    color: COLORS.grey,
    marginLeft: 4,
  },
});
}

export default Comment;