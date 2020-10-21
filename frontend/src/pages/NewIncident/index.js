import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import './style.css'
import logoForteGPS from '../../assets/LOGO-FORTEGPS.png'


export default function NewIncident() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue ] = useState('')

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')

   async function handleNewIncident(e) {
        e.preventDefault()

        const data = {
            title,
            description,
            value,
        }
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile')
        } catch (err) {
            alert('Erro ao cadastrar acordo, tente novamente')
        }
    }

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

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="GRID ou Nome do Inadimplente"
                        value={title}
                        onChange={ e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={ e => setDescription(e.target.value)}
                  />
                    <input 
                        placeholder="valor total"
                        value={value}
                        onChange={ e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>

            </div>
        </div>
    )
}