import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Container from './components/container/container';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Container mensaje="hola bienvenido"/>
    </div>
  );
}

export default App;
