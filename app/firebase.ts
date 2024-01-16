import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAGvsRf06vmARUQLkXIY1T9Cg90nbtjprU',
  authDomain: 'crosscheck-test-392df.firebaseapp.com',
  projectId: 'crosscheck-test-392df',
  storageBucket: 'crosscheck-test-392df.appspot.com',
  messagingSenderId: '352357811941',
  appId: '1:352357811941:web:5c3ef5cfca37a89b4ff60c',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
