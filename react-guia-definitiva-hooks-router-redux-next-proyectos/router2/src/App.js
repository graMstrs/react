import {useLocation, Routes, Route, Link} from 'react-router-dom'

function useQuery(){
  return new URLSearchParams(useLocation().search)
} 

function App() {
  const query = useQuery()
  const chancho = query.get('chancho')
  const nombre = query.get('nombre')
  console.log({chancho, nombre})
  return (
    <div>
      <nav> 
        <ul>
          <li>
            <Link to={"/"}> Inicio </Link>
          </li>
          <li>
            <Link to={"/portafolio"}> Portafolio </Link>
          </li>
        </ul> 
      </nav>

      <section>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
           <Route path="/portafolio" element={<h1>Portafolio</h1>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;