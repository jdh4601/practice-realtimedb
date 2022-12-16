import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAwnJYcVh2MepTRgX82yCvNld4fFbzHIao',
  authDomain: 'food-order-8feb5.firebaseapp.com',
  projectId: 'food-order-8feb5',
  storageBucket: 'food-order-8feb5.appspot.com',
  messagingSenderId: '1060401399016',
  appId: '1:1060401399016:web:5bd145d4bc6cf5b260f55d',
  measurementId: 'G-3VV43V6MDJ',
  databaseURL: 'https://orderfood.firebaseio.com',
};

const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
