import './App.css'
import Head from './componets/header_componet/Head.jsx';
import Routing from './componets/routing/Routing.jsx';
import MyTimer from './componets/timerrevers/MyTimer.jsx';
const parent = 'Hi i from parent component or App.jsx';

function App() {
  return (
    <>
     <Head/>
     <MyTimer/>
     <Routing parentdata={parent}/>
    </>
  )
}

export default App;
