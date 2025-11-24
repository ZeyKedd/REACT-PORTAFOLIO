Firebase Realtime Database — conexión base

Instrucciones rápidas

- Instalar la dependencia:

```bash
npm install firebase
```

- Añade las credenciales en un archivo `.env` en la raíz del proyecto (no lo subas al repo):

```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_DATABASE_URL=https://<tu-proyecto>.firebaseio.com
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

- Uso básico en un componente (ejemplo con efecto y suscripción):

```jsx
import React, { useEffect, useState } from 'react'
import { subscribeProjects, getProjectsOnce } from '../../services/firebase'

function PortfolioExample() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // suscripción en tiempo real
    const unsubscribe = subscribeProjects(list => setProjects(list))
    return () => unsubscribe()
  }, [])

  // o para obtenerlos sólo una vez:
  // useEffect(() => { getProjectsOnce().then(setProjects) }, [])

  return (
    <div>
      {projects.map(p => (
        <div key={p.id}>{p.title || 'Proyecto sin título'}</div>
      ))}
    </div>
  )
}

export default PortfolioExample
```

Notas
- El archivo `index.js` exporta `subscribeProjects`, `getProjectsOnce` y `db`.
- Usa variables de entorno para no exponer credenciales en el repo.
