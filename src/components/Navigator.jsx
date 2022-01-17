import Link from 'next/link'
import styles from '../styles/Navigator.module.css'
export default function Navigator(props) {
    return (
        <Link href={props.destino}>
            <div className={styles.navegador} style={{
                backgroundColor: props.cor ?? 'dodgerblue'
            }}>
               { props.texto}
            </div>
        </Link>
    )
}