// components/CommentsModal.tsx
import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Comment, CommentModalProps } from '../../Constants/comment';

import CommentComponent from './Comment';
import { useTheme } from '../hooks/useTheme';

const CommentsModal: React.FC<CommentModalProps> = ({
  postId,
  visible,
  onClose,
  onCommentAdded,
  initialComments = []
}) => {


  const { COLORS } = useTheme();
  const styles = userModalStyles();

  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      text: newComment,
      username: 'You', // Default user
      timestamp: new Date().toISOString(),
      likes: 0
    };
    
    setComments([...comments, comment]);
    setNewComment('');
    onCommentAdded();
  };

  const handleLikeComment = (commentId: string) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 } 
        : comment
    ));
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >

      <ScrollView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
          >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Comments</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color={COLORS.white} />
            </TouchableOpacity>
          </View>

          {/* Comments List */}
          <FlatList
            data={comments}
            renderItem={({ item }) => (
              <CommentComponent
                comment={item}
                onLikePress={() => handleLikeComment(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.commentsList}
            ListEmptyComponent={
              <Text style={styles.noCommentsText}>No comments yet</Text>
            }
          />

          {/* Comment Input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Add a comment..."
              placeholderTextColor={COLORS.primary}
              value={newComment}
              onChangeText={setNewComment}
              multiline
            />
            <TouchableOpacity
              style={styles.postButton}
              onPress={handleAddComment}
              disabled={!newComment.trim()}
              >
              <Text style={[
                styles.postButtonText,
                !newComment.trim() && styles.postButtonDisabled
              ]}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
                </ScrollView>
    </Modal>
  );
};

const userModalStyles = () => {
  const { COLORS } = useTheme();
  return StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background2,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  commentsList: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  noCommentsText: {
    textAlign: 'center',
    marginTop: 20,
    color: COLORS.surfaceLight,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.white,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    maxHeight: 100,
    color: COLORS.white,
    marginBottom:12,
    
  },
  postButton: {
    padding: 8,
    borderColor:COLORS.logoColor,
     borderWidth:2,
  },
  postButtonText: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  postButtonDisabled: {
    color: COLORS.grey,
  },
});}

export default CommentsModal;