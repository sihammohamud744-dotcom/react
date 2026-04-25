import './App.css'
import Header from './components/Header'
import Greeting from './components/Greetings'
import Student from './components/Student'
function App() {
  return (

    <>
      <Greeting name="Siham" surname="mohamud" />

      <Student age={22} isStudent={true} />

      <Header />
      <Header />
      <Header />
      <Header />

    </>
  )
}

export default App
