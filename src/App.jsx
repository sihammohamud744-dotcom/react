import './App.css'
import Header from './components/Header'
import Greeting from './components/greatings'
import Student from './components/student'
function App() {
  return (

    <>
    <Fragment></Fragment>

      <Greeting name="Siham" surname= "mohamud" />

  <Student age= "22" isStudent= {"true"} />

      <Header />
      <Header />
      <Header />
      <Header />

    </>
  )
}

export default App
