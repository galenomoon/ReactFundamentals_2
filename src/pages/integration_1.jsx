import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integration() {

    const [codigo, setCodigo] = useState(1)
    const [client, setClient] = useState({})

    function getClient() {

        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setClient(dados))

    }

    return (
        <Layout>
            <input type='number' value={codigo} onChange={e => setCodigo(e.target.value)} />
            <button onClick={getClient}>Get Client</button>
            <ul>
                <li>Código: {client.id}</li>
                <li>Nome: {client.name} </li>
                <li>Email: {client.email}</li>
            </ul>
        </Layout>
    )
}