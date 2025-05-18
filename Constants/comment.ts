// types/comment.ts
export interface Comment {
  id: string;
  text: string;
  username: string;
  timestamp: string;
  likes: number;
  avatar?: string; // Optional to match your post structure
}

export interface CommentModalProps {
  postId: string;
  visible: boolean;
  onClose: () => void;
  onCommentAdded: () => void;
  initialComments?: Comment[]; // Optional for mock data
}

export interface CommentComponentProps {
  comment: Comment;
  onLikePress?: () => void;
}