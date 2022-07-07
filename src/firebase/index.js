import { initializeApp } from "firebase/app";
import { getStorage, connectStorageEmulator } from "firebase/storage"
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import {
  fsEmulatorHost, fsEmulatorPort,
  authEmulatorHost, authEmulatorPort,
  storageEmulatorHost, storageEmulatorPort,
} from "../constants"

const firebaseConfig = {
  apiKey: "<INSERT>",
  authDomain: "<PROJECT ID>.firebaseapp.com",
  projectId: "<PROJECT ID>",
  storageBucket: "<PROJECT ID>.appspot.com",
  messagingSenderId: "<INSERT>",
  appId: "<INSERT>",
  measurementId: "<INSERT>"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage()

if (import.meta.env.VITE_FIREBASE_EMULATE) {
  connectFirestoreEmulator(db, fsEmulatorHost, fsEmulatorPort)
  connectAuthEmulator(auth, `http://${authEmulatorHost}:${authEmulatorPort}`)
  connectStorageEmulator(storage, storageEmulatorHost, storageEmulatorPort)
}

export default app
export {
  db,
}