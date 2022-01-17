import Layout from "../components/Layout"

export default function Jsx() {
    const title = <h1>JSX</h1>
    function subtitle() {
        return <h2>{"subtitle".toUpperCase()}</h2>
    }
    return (
        <Layout title="Entendendo o JSX">

            <div>
                {title}
                {subtitle()}
            </div>
        </Layout>
    )
}