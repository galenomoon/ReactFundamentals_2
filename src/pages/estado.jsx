import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {


    const state = useState(0)
    let number = state[0]
    let setNumber = state[1]

    function incrementar() {
        setNumber(number + 1)
    }
    return (
        <Layout title="Componente com Estado">
            <span>{number}</span>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}