import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './style.css'
import logoForteGPS from '../../assets/LOGO-FORTEGPS.png'

export default function NewIncident() {
    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoForteGPS} alt="ForteGPS - Logo"/>

                    <h1>Cadastrar novo acordo</h1>
                    <p>Descreva o acordo detalhadamente para acompanhar e analisar a situação.</p>
                    
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#33CA78" />
                        Voltar para home
                    </Link>
                </section>

                <form action="">
                    <input placeholder="GRID ou Nome do Inadimplente"/>
                    <textarea placeholder="Descrição" />
                    <input placeholder="valor total"/>

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>

            </div>
        </div>
    )
}