import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './style.css'

import heroesGPS from '../../assets/fortegps-pessoas.png'
import logoForteGPS from '../../assets/LOGO-FORTEGPS.png'

export default function Logon() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const history = useHistory()
    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('sessions', { id })
        
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch (err) {
            alert('Falha!')
            
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoForteGPS} alt="Logo ForteGPS"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={ e => setId(e.target.value)}
                        />
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