import {Routes, Route, Link, NavLink, useMatch, useParams} from 'react-router-dom'


const Proyecto = () => {
    const match = useMatch('/portafolio/:proyecto_id')
    const params = useParams();
    const { proyecto_id } = params;
    console.log({match, params});

    return <h2> Proyecto: {proyecto_id} </h2>
}


const Portafolio = () => {
    console.log("Portafolio")
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <NavLink activeStyle={{ fontSize: 20}} to='/portafolio/proyecto-1'>
                        Proyecto-1
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ fontSize: 20}} to='/portafolio/proyecto-2'>
                        Proyecto-2
                    </NavLink>
                </li>
            </ul>
            <section>
                <Routes>
                    <Route path=":proyecto_id" element={<Proyecto/>} />
                </Routes>
            </section>
        </div>
    )
}


function App() {
    let activeStyle = {
        fontSize: 20,
        textDecoration: 'none',
        color: 'red',
    };
  return (
    <div>
      <nav> 
        <ul>
          <li>
            <NavLink style={activeStyle} to="/"> Inicio </NavLink>
          </li>
          <li>
            <NavLink style={ activeStyle} to="/portafolio/"> Portafolio </NavLink>
          </li>
        </ul> 
      </nav>

      <section>
        <Routes>
            <Route path="/" element={<h1>Inicio</h1>} />
            <Route path="portafolio/*"   element={<Portafolio/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;