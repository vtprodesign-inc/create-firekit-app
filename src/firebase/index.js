import { initializeApp } from "firebase/app";
import { getStorage, connectStorageEmulator } from "firebase/storage"
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import firebaseConfig, {
  fsEmulatorHost, fsEmulatorPort,
  authEmulatorHost, authEmulatorPort,
  storageEmulatorHost, storageEmulatorPort,
} from "./config"

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