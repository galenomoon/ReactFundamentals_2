import Navigator from "./../components/Navigator";
//Functional exporting
export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap"
      }}
    >
      <Navigator texto="Estilo" destino="/estiloso" />
      <Navigator texto="Exemplo" destino="/example" />
      <Navigator texto="JSX" destino="/jsx" />
      <Navigator texto="Navegação #01" destino="/navegation" />
      <Navigator texto="Navegação #02" destino="/cliente/sp_2/123" />
    </div>
  );
}
