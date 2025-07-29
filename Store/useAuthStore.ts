import { create } from 'zustand';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  User,
  updateProfile
} from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

// Random profile picture generator
const getRandomProfilePic = () => {
  return 'https://source.unsplash.com/random/200x200/?face,portrait';
};

interface AppUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthState {
  user: AppUser | null;
  loading: boolean;
  error: string | null;
  initializeAuth: () => () => void;
  SignIn: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, displayName?: string) => Promise<void>;
  logout: () => Promise<void>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  error: null,

  initializeAuth: () => {
    set({ loading: true });
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: User | null) => {
      if (firebaseUser) {
        const user: AppUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL || getRandomProfilePic() // Fallback to random pic
        };
        set({ user, loading: false, error: null });
      } else {
        set({ user: null, loading: false, error: null });
      }
    });
    return unsubscribe;
  },

  SignIn: async (email: string, password: string) => {
    set({ loading: true, error: null });
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      const user: AppUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL || getRandomProfilePic() // Fallback to random pic
      };
      set({ user, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  register: async (email: string, password: string, displayName?: string) => {
    set({ loading: true, error: null });
    try {
      const profilePic = getRandomProfilePic(); // Generate random pic for new users
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      // Update profile with both displayName and photoURL
      await updateProfile(firebaseUser, {
        displayName: displayName || email.split('@')[0], // Fallback to username part of email
        photoURL: profilePic
      });

      const user: AppUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: displayName || email.split('@')[0],
        photoURL: profilePic
      };
      set({ user, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  logout: async () => {
    set({ loading: true });
    try {
      await signOut(auth);
      set({ user: null, loading: false, error: null });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));