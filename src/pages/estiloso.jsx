import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
export default function Estiloso() {
    return (
        <Layout title='Exemplo de CSS modularizado'>

            <div className={styles.roxo}>
                <h1>Style using CSS modules</h1>
            </div>
        </Layout>
    )
}