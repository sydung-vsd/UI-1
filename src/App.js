import Header from './components/header/Header';
import Main from './components/main/Main';
import './styles/_global.scss';
import './styles/_reset.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
