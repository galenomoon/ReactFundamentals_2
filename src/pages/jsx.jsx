export default function Jsx(){
    const title =   <h1>JSX</h1>
    function subtitle(){
return <h2>{"subtitle".toUpperCase()}</h2>
    }
return(
    <div>
      {title}
      {subtitle()}
    </div>
)
}