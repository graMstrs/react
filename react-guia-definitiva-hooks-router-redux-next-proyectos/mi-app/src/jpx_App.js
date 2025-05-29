import logo from './logo.svg';
import './App.css';


const LI = (props) => {
  return (
    <li class='clase-li'> valor de li </li>
  )
}

const App = () => {

  const valor = 'feliz'

  return (
    <ul className="clase-css">
      <LI>

      </LI>
    </ul>
  );
}

export default App;
