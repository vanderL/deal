import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import './style.css'

import heroesGPS from '../../assets/heroes.png'
import logoForteGPS from '../../assets/logo.svg'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoForteGPS} alt="Logo ForteGPS"/>

                <form action="">
                    <h1>Faça seu Login</h1>

                    <input placeholder="Sua ID" />

                    <a href="/register">
                        <FiLogIn />
                        Não tenho cadastro
                    </a>
                </form>
            </section>

            <img src={heroesGPS} alt="ForteGPS"/>
        </div>
    )
}