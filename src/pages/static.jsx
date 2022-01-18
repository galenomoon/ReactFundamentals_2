import Layout from '../components/Layout'

export async function getStaticProps() {
    return {
        props: {
            number: parseInt(Math.random() * 100)
        }
    }
}
export default function Static(props) {
    return <Layout title='Static Content'>
        <div>
            {props.number}
        </div>
    </Layout>
}