import React from 'react'
import './inicio.style.css'
import FotoInicio from '../../img/HERNANDEZ_SEBASTIAN-removebg-preview.png'

const inicio = () => {
    return (
        // <></>
        <>
            <div className='containerInicio'>

                <div>
                    <img src={FotoInicio} alt="foto" className='fotoMain' />
                </div>

                <div className='textInicio'>
                    <p className='parrafo'><span className='spanText'>Sebastian </span>Andres</p>
                    <p className='parrafo'><span style={{paddingLeft:"80px"}} className='spanText'>Hernandez </span> Trochez</p>
                    <p className='parrafo_Abajo' style={{fontFamily:"arvo"}}>DESARROLLADOR DE SOFTWARE</p>
                    <p className='subtitulo' style={{fontFamily:"arvo"}}>Full-Stack Developer | Frontend con React · Backend con PHP / JS · Data con SQL / NoSQL</p>
                </div>

            </div>
        </>
    )
}

export default inicio