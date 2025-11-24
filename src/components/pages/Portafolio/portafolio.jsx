import React, { useEffect, useState } from 'react'
import './portafolio.style.css'
import proyectoImg from '../../img/proyecto-py.jpeg'
import { subscribeProjects, getProjectsOnce } from '../../../services/firebase'

const ProjectCard = ({ title = 'Proyecto ejemplo', desc = 'Descripción breve del proyecto', img = proyectoImg, tags = [], demoUrl = '', repoUrl = '' }) => (
    <article className="project-card">
        <div className="project-media">
            <img src={img} alt={title} />
        </div>
        <div className="project-body">
            <h3 className="project-title">{title}</h3>
            <p className="project-desc">{desc}</p>
            <div className="project-tags">
                {(tags || []).map((t, idx) => (
                    <span key={idx}>{t}</span>
                ))}
            </div>
            <div className="project-actions">
                {demoUrl ? (
                    <a className="btn" href={demoUrl} target="_blank" rel="noopener noreferrer">Ver</a>
                ) : (
                    <button className="btn" disabled>Ver</button>
                )}

                {repoUrl ? (
                    <a className="btn btn-outline" href={repoUrl} target="_blank" rel="noopener noreferrer">Código</a>
                ) : (
                    <button className="btn btn-outline" disabled>Código</button>
                )}
            </div>
        </div>
    </article>
)

const Portafolio = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let unsub = null
        // Obtener una vez al principio y luego suscribir en tiempo real
        getProjectsOnce()
            .then(list => {
                if (list && list.length > 0) setProjects(list)
            })
            .catch(err => console.warn('Firebase getProjectsOnce error', err))
            .finally(() => setLoading(false))

        try {
            unsub = subscribeProjects(list => {
                if (list && list.length > 0) setProjects(list)
                setLoading(false)
            })
        } catch (err) {
            console.warn('Firebase subscribeProjects error', err)
            setLoading(false)
        }

        return () => {
            if (typeof unsub === 'function') unsub()
        }
    }, [])

    return (
        <section className="portfolio-page">
            <header className="portfolio-header">
                <h2>Portafolio</h2>
                <p className="lead">Proyectos y tecnologías — clic en "Ver" para demo o en "Código" para repositorio</p>
            </header>

            <div className="projects-grid">
                {loading ? (
                    <div className="portfolio-empty">Cargando proyectos...</div>
                ) : projects.length === 0 ? (
                    <div className="portfolio-empty">No hay proyectos aún.</div>
                ) : (
                    projects.map((p, i) => (
                        <ProjectCard
                            key={p.id || i}
                            title={p.title}
                            desc={p.desc}
                            img={p.img}
                            tags={p.tags}
                            demoUrl={p.demoUrl}
                            repoUrl={p.repoUrl}
                        />
                    ))
                )}
            </div>
        </section>
    )
}

export default Portafolio