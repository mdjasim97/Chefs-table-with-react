import Bannar from './component/Bannar/Bannar'
import Header from './component/Header/Header'
import "./App.css"
import Racipes from './component/Our_Racipe/Racipes'
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
      <div>
      <ToastContainer />
        <Header></Header>
        <Bannar></Bannar>
        <Racipes></Racipes>
      </div>
      {/* <h1>Vite + React</h1> */}

    </>
  )
}

export default App
