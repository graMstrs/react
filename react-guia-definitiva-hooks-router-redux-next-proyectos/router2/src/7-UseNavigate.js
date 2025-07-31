import { Routes, Route, Link, useNavigate} from 'react-router-dom'


function App() {
    const navigate = useNavigate();
    console.log(navigate)

const forward = () => {
    navigate(1);
  };
 
  const back = () => {
    navigate(-1);
  };

  const push = (url) => {
    navigate(url);
  };

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
        <button onClick={back}>Back</button>
        <button onClick={forward}>Forward</button>
        <button onClick={() => push('/chanchitofeliz')}>Push</button>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
           <Route path="/portafolio" element={<h1>Portafolio</h1>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;