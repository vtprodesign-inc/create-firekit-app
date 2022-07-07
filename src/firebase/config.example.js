import firebaseJson from "@/../firebase.json"

const emuHost = import.meta.env.VITE_FIREBASE_EMU_HOST || 'localhost'

export const fbFunctionsOrigin = import.meta.env.VITE_FIREBASE_EMULATE
    ? `http://${emuHost}:${firebaseJson.emulators.functions.port}/<PROJECT ID>/<REGION>`
    : "https://<FUNCTIONS SUBDOMAIN>.cloudfunctions.net"

/* firestore emulator */
export const fsEmulatorHost = import.meta.env.VITE_FIREBASE_EMU_HOST || 'localhost'
export const fsEmulatorPort = firebaseJson.emulators.firestore.port

/* auth emulator */
export const authEmulatorHost = import.meta.env.VITE_FIREBASE_EMU_HOST || 'localhost'
export const authEmulatorPort = firebaseJson.emulators.auth.port

/* storage emulator */
export const storageEmulatorHost = import.meta.env.VITE_FIREBASE_EMU_HOST || 'localhost'
export const storageEmulatorPort = firebaseJson.emulators.storage.port

export default {
  apiKey: "<INSERT>",
  authDomain: "<PROJECT ID>.firebaseapp.com",
  projectId: "<PROJECT ID>",
  storageBucket: "<PROJECT ID>.appspot.com",
  messagingSenderId: "<INSERT>",
  appId: "<INSERT>",
  measurementId: "<INSERT>"
};