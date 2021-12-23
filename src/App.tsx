import './App.css';
import { Footer }from 'components';
import { Header } from 'components';
import {Content} from 'components';
import { Layout } from 'components';


function App() {
  return (
    <div className="App">
      <Layout/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App
