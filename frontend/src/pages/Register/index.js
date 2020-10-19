import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './style.css'

import logoForteGPS from '../../assets/LOGO-FORTEGPS.png'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoForteGPS} alt="ForteGPS - Logo"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e faça acordos para diminuir a inadimplência</p>
                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#33CA78" />
                        Voltar
                    </Link>
                </section>

                <form action="">
                    <input placeholder="Nome do Responsavel"/>
                    <input placeholder="E-mail" type="email"/>
                    <input placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>

            </div>
        </div>
    )
}