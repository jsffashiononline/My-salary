import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase client configuration. Secure data access with Firebase Rules.
const firebaseConfig = {
  apiKey: "AIzaSyCBqKIbbfPzT6YLDRsmJp-k66FCmMoR62o",
  authDomain: "salary-and-production.firebaseapp.com",
  projectId: "salary-and-production",
  storageBucket: "salary-and-production.firebasestorage.app",
  messagingSenderId: "237716390645",
  appId: "1:237716390645:web:3d556f2956018d86643bbc",
  measurementId: "G-E8H2V0RWWY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
