import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue, get } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

// LEE SIEMPRE DESDE LA RAÍZ
export function subscribeProjects(callback) {
  const projectsRef = ref(db)

  return onValue(projectsRef, snapshot => {
    const value = snapshot.val()
    if (!value) return callback([])

    // si es objeto → mapear a array
    if (typeof value === 'object') {
      const list = Object.keys(value).map(key => ({
        id: key,
        ...value[key]
      }))
      return callback(list)
    }

    callback([])
  })
}

export async function getProjectsOnce() {
  const snap = await get(ref(db))
  const value = snap.val()
  if (!value) return []

  return Object.keys(value).map(key => ({
    id: key,
    ...value[key]
  }))
}

export { db }
