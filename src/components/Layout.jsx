import Link from "next/link"
import styles from '../styles/Layout.module.css'

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <h1>{props.title ?? 'Mais um exemplo'}</h1>
                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.content}>
                {props.children}

            </div>
        </div>
    )
}