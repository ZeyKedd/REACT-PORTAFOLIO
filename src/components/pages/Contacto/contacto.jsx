import React from 'react'
import './contacto.style.css'
import foto from '../../img/foto-recortada.png'
import { TbBrandGmail } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const contacto = () => {
    return (
        <div>
            <div class="card text-bg-dark " style={{width: "40rem"}}>
                <img src= {foto} class="circle-img " alt="..."/>
                    <h1 class="text-circle-image">SEBASTIAN HERNANDEZ</h1>
                    <h6 class="text-circle-image">CALI - COLOMBIA</h6>
                    <div class="card-body">
                        <a title='Github' class="iconsContact" href="https://github.com/ZeyKedd" target="_blank" rel="noopener noreferrer"> <FaGithub/> </a>
                        <a title='Correo' class="iconsContact" href="mailto:sebhrz08@gmail.com"> <TbBrandGmail /></a>
                        <a title='Linkedin' class="iconsContact" href="https://www.linkedin.com/in/sebastian-hernandez-581b87340/?trk=opento_sprofile_goalscard" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
                    </div>
            </div>
        </div>
    )
}

export default contacto