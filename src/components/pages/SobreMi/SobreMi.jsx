import React from 'react'
import './SobreMi.style.css'

const SobreMi = () => {
    return (
        <section className="sobre-mi-container">
            <h2 className="sobre-mi-title">Sobre mí</h2>

            <p className="sobre-mi-text">
                Soy <strong>Sebastián Andrés Hernández Trochez</strong>, tengo 20 años y desde muy joven me llamó la atención la programación. Empecé por curiosidad, queriendo entender cómo se construían las cosas que usaba a diario, y con el tiempo se volvió parte de mi día a día.
            </p>

            <p className="sobre-mi-text">
                Me gusta aprender por mi cuenta, probar ideas nuevas y ver cómo algo que empieza siendo una simple línea de código puede convertirse en un proyecto real. Disfruto mejorar lo que hago, romperlo, arreglarlo y volver a hacerlo mejor. Siempre estoy buscando una forma más clara, simple y eficiente de construir.
            </p>

            <p className="sobre-mi-text">
                Me gusta trabajar en equipo, compartir ideas y aprender de otras personas. Creo que la programación no solo es escribir código, sino entender problemas y pensar en soluciones que realmente sirvan.
            </p>

            <p className="sobre-mi-text">
                En este sitio muestro parte de lo que he ido construyendo. Si te interesa hablar, colaborar o necesitas ayuda con algo, puedes escribirme cuando quieras.
            </p>

            <div className="sobre-mi-links">
                <a href="/portafolio" className="sobre-mi-btn btn-outline">Portafolio</a>
                <a href="/contacto" className="sobre-mi-btn btn-outline">Contacto</a>
            </div>
        </section>
    )
}

export default SobreMi
