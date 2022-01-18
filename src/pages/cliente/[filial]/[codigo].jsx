import Layout from "../../../components/Layout";
import { useRouter } from 'next/router';

export default function ClienteProCodigo() {
    const router = useRouter()
    return (
        <Layout title="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}