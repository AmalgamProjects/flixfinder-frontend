const settings = {
  apiUrl: process.env.REACT_APP_API_URL,
  firebase: {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || '',
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL || '',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || '',
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASURMENT_ID,
  },
};

export default settings;
