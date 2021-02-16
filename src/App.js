// import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import News from './Components/News';
import Header from './Components/Jumbotron/Header';
import NewsAgency from './Components/NewsAgency/NewsAgency';
import Fragments from './Components/Fragments/Fragments';
import Axios from './Components/Axios/Axios';
import Charts from './Components/Charts/Charts';
// import Charts from './Components/Chart/Charts';





function App() {
  return (
    <div className="App">
      <Button variant="success">Alhmadulillah</Button>
      <br/>
      <News></News>
      <br/>
      <Header></Header>
      <br/>
      <NewsAgency></NewsAgency>
      <br/>
      <Fragments></Fragments>
      <br/>
      <Charts></Charts>
      <br/>
      {/* <Axios></Axios>  */}
    </div>
  );
}

export default App;
