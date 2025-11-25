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

// LEE DESDE /projects
export function subscribeProjects(callback) {
  const projectsRef = ref(db, 'projects')

  return onValue(projectsRef, snapshot => {
    const value = snapshot.val()
    if (!value) return callback([])
    const list = Object.keys(value).map(key => ({ id: key, ...value[key] }))
    return callback(list)
  })
}

export async function getProjectsOnce() {
  const snap = await get(ref(db, 'projects'))
  const value = snap.val()
  if (!value) return []

  return Object.keys(value).map(key => ({ id: key, ...value[key] }))
}

/**
 * Subscribe to `skills` node in the Realtime Database.
 * Callback receives an array of skill objects: [{id, name, category, proficiency, ...}, ...]
 * Returns the unsubscribe function from `onValue`.
 */
export function subscribeSkills(callback) {
  const skillsRef = ref(db, 'skills')

  return onValue(skillsRef, snapshot => {
    const value = snapshot.val()
    if (!value) return callback([])
    const list = Object.keys(value).map(key => ({ id: key, ...value[key] }))
    return callback(list)
  })
}

export async function getSkillsOnce() {
  // try lowercase first
  let snap = await get(ref(db, 'skills'))
  let value = snap.val()
  if (!value) {
    // fallback to capitalized node name if user used that
    snap = await get(ref(db, 'Skills'))
    value = snap.val()
  }
  if (!value) return []

  return Object.keys(value).map(key => ({ id: key, ...value[key] }))
}

/**
 * Subscribe to `experience` node.
 */
export function subscribeExperience(callback) {
  const xpRef = ref(db, 'experience')

  return onValue(xpRef, snapshot => {
    const value = snapshot.val()
    if (!value) return callback([])
    const list = Object.keys(value).map(key => ({ id: key, ...value[key] }))
    return callback(list)
  })
}

export async function getExperienceOnce() {
  let snap = await get(ref(db, 'experience'))
  let value = snap.val()
  if (!value) {
    snap = await get(ref(db, 'Experience'))
    value = snap.val()
  }
  if (!value) return []

  return Object.keys(value).map(key => ({ id: key, ...value[key] }))
}

export { db }
