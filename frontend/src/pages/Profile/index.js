import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './style.css'

import logoForteGPS from '../../assets/LOGO-FORTEGPS.png'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoForteGPS} alt="Logo ForteGPS"/>
                <span>Bem vinda, FINANCEIRO</span>

                <Link className="button" to="/incidents/new"> Cadastrar novo acordo</Link>
                <button type="button">
                    <FiPower size={16} color="#33CA78" />
                </button>
            </header>

            <h1>Acordos cadastrados</h1>
            {/*  Inicio  da Listagem estatica */}
            <ul>
                <li>
                    <strong>ACORDO</strong>
                    <p>1293</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Ta devendo os meses maio, junho, julho, agosto e setembro. Vai pagar junto com outubro.</p>

                    <strong>VALOR</strong>
                    <p>R$ 300,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
              {/*  Fim da Listagem estatica base */}
              {/*  Inicio  da Listagem estatica para replicação*/}
              <li>
                    <strong>ACORDO</strong>
                    <p>1293</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Ta devendo os meses maio, junho, julho, agosto e setembro. Vai pagar junto com outubro.</p>

                    <strong>VALOR</strong>
                    <p>R$ 300,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>ACORDO</strong>
                    <p>1293</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Ta devendo os meses maio, junho, julho, agosto e setembro. Vai pagar junto com outubro.</p>

                    <strong>VALOR</strong>
                    <p>R$ 300,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>ACORDO</strong>
                    <p>1293</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Ta devendo os meses maio, junho, julho, agosto e setembro. Vai pagar junto com outubro.</p>

                    <strong>VALOR</strong>
                    <p>R$ 300,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>ACORDO</strong>
                    <p>1293</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Ta devendo os meses maio, junho, julho, agosto e setembro. Vai pagar junto com outubro.</p>

                    <strong>VALOR</strong>
                    <p>R$ 300,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>ACORDO</strong>
                    <p>1293</p>

                    <strong>DESCRIÇÃO</strong>
                    <p>Ta devendo os meses maio, junho, julho, agosto e setembro. Vai pagar junto com outubro.</p>

                    <strong>VALOR</strong>
                    <p>R$ 300,00 reais</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                {/*  Fim  da Listagem estatica para replicação*/}


            </ul>

        </div>
    )
}