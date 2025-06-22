//services/firebaseDatabase.ts
import { database } from "./firebaseConfig";
import { ref, set, onValue, update, remove, push, DataSnapshot } from "firebase/database"


//define type for dataa moddels
interface User {
    username: string,
    email:string,
    profile_picture?:string,    
}

interface Post {
    author:string,
    title:string,
    body:string,
    starCount:number;
}

//write user data
export const writeUserData = (userId:string, userData:User) : Promise<void> =>
    {
    return set(ref(database, 'users/${userId}'), userData);
    
};

// Listen to user data (realtime)
export const listenToUserData = (
  userId: string,
  callback: (user: User | null) => void
): void => {
  const userRef = ref(database, `users/${userId}`);
  onValue(userRef, (snapshot: DataSnapshot) => {
    callback(snapshot.val());
  });
}


// Add a post with auto-generated ID
export const addPost = (postData: Post): void => {
  const postListRef = ref(database, 'posts');
  const newPostRef = push(postListRef);
  set(newPostRef, postData);
};

// Update specific fields
export const updateUserProfile = (
  userId: string,
  updates: Partial<User>
): Promise<void> => {
  return update(ref(database, `users/${userId}`), updates);
};
