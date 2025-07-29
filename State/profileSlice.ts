// profileSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { POSTS } from '../Constants/mock-data.post' // Adjust the import path

interface UserProfile {
  userId: string;
  userName: string;
  avatar: any;
  bio: string;
  followers: number;
  following: number;
  noOfPost: number;
  posts: Post[];
}

interface Post {
  id: string;
  image: any;
  caption?: string;
  likes?: number;
  comments?: number;
}

interface ProfileState {
  currentUser: UserProfile | null;
  allUsers: UserProfile[];
}

const initialState: ProfileState = {
  currentUser: null,
  allUsers: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    initializeProfiles(state) {
      // Transform your mock data into the profile structure
      const usersMap = new Map<string, UserProfile>();
      
      POSTS.forEach(post => {
        if (!usersMap.has(post.userId)) {
          usersMap.set(post.userId, {
            userId: post.userId,
            userName: post.authorName,
            avatar: post.avatar,
            bio: post.bio,
            followers: post.followers,
            following: post.following,
            noOfPost: post.noOfPost,
            posts: [],
          });
        }
        
        const user = usersMap.get(post.userId)!;
        user.posts.push({
          id: post.id,
          image: post.avatar, // Using avatar as post image for simplicity
          caption: post.caption,
        });
      });
      
      state.allUsers = Array.from(usersMap.values());
      state.currentUser = state.allUsers[0]; // Set first user as current for demo
    },
    
    setCurrentUser(state, action: PayloadAction<string>) {
      const userId = action.payload;
      const user = state.allUsers.find(u => u.userId === userId);
      if (user) {
        state.currentUser = user;
      }
    },
    
    updateProfile(state, action: PayloadAction<Partial<UserProfile>>) {
      if (state.currentUser) {
        state.currentUser = {
          ...state.currentUser,
          ...action.payload,
        };
        
        // Also update in allUsers
        const index = state.allUsers.findIndex(u => u.userId === state.currentUser?.userId);
        if (index !== -1) {
          state.allUsers[index] = state.currentUser;
        }
      }
    },
  },
});

export const { initializeProfiles, setCurrentUser, updateProfile } = profileSlice.actions;
export default profileSlice.reducer;