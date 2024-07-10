
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAiYTuaHsx2ReuHNF8Y2bnla6LnouXl8dw",
  authDomain: "omegal-e9708.firebaseapp.com",
  projectId: "omegal-e9708",
  storageBucket: "omegal-e9708.appspot.com",
  messagingSenderId: "597318569119",
  appId: "1:597318569119:web:7b800f6812edbc957666aa",
  measurementId: "G-LZPDB1XMW5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);