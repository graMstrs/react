const impura = () => new Date().toLocaleString()

console.log(impura())

const MiComponente = ({ miProp }) => {
  console.log(miProp)
  return (
    
    <div>
      Nombre: {miProp}
    </div>
  )
}



const App = () => {
  return (
    <MiComponente miProp={'Chanchito feliz'} />
  )
}

export default App;
