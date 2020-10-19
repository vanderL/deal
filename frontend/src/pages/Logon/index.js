import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './style.css'

import heroesGPS from '../../assets/fortegps-pessoas.png'
import logoForteGPS from '../../assets/LOGO-FORTEGPS.png'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoForteGPS} alt="Logo ForteGPS"/>

                <form action="">
                    <h1>Faça seu Login</h1>

                    <input placeholder="Sua ID" />
                    <button className="button" >Entrar </button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#33CA78" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesGPS} alt="ForteGPS"/>
        </div>
    )
}