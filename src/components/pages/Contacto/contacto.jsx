import React from 'react'
import './contacto.style.css'
import foto from '../../img/foto-recortada.png'

export const contacto = () => {
    return (
        <div>
            <div class="card text-bg-dark " style={{width: "40rem"}}>
                <img src= {foto} class="circle-img " alt="..."/>
                    <h1 class="text-circle-image">SEBASTIAN HERNANDEZ</h1>
                    <h6 class="text-circle-image">CALI - COLOMBIA</h6>
                    <div class="card-body">
                    </div>
            </div>
        </div>
    )
}

export default contacto
