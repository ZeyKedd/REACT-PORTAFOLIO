import React from 'react'
import './SobreMi.style.css'

const SobreMi = () => {
    return (
        <section className="sobre-mi-container">
            <h2 className="sobre-mi-title">Sobre mí</h2>

            <p className="sobre-mi-text">
                Soy <strong>Sebastián Hernández</strong>, una persona enfocada, tranquila y curiosa.
                Me gusta aprender, mejorar mis proyectos y buscar soluciones simples pero efectivas.
                Disfruto trabajar en equipo, compartir ideas y construir cosas que realmente sirvan.
            </p>

            <p className="sobre-mi-text">
                En este sitio puedes ver un poco de lo que hago, y si quieres hablar, trabajar
                juntos o simplemente conectar, puedes escribirme cuando quieras.
            </p>

            <div className="sobre-mi-links">
                <a href="/portafolio" className="sobre-mi-btn btn-outline">Portafolio</a>
                <a href="/contacto" className="sobre-mi-btn btn-outline">Contacto</a>
            </div>
        </section>
    )
}

export default SobreMi
