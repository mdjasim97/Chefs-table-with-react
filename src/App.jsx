import Banner from './component/Bannar/Bannar'
import Header from './component/Header/Header'
import "./App.css"
import recipes from './component/Our_Racipe/recipes'
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
      <div>
        <ToastContainer />
        <Header></Header>
        <Banner></Banner>
        <recipes></recipes>
      </div>
      {/* <h1>Vite + React</h1> */}

    </>
  )
}

export default App
