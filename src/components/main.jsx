import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio  from './pages/Inicio/inicio'
import Contacto  from './pages/Contacto/contacto'
import Portafolio from './pages/Portafolio/portafolio'
import SobreMi  from './pages/SobreMi/SobreMi'

export const main = () => {
    return (
    // <></>
    <main>
        <Routes>
            <Route path="/"
                element={<Inicio />}
                
            />
            <Route path="/contacto"
                element={<Contacto />}
            />
            <Route path="/portafolio"
                element={<Portafolio />}
                />
                <Route path="/SobreMi"
                element={<SobreMi />}
                />
        </Routes>
    </main>
    )
}

export default main