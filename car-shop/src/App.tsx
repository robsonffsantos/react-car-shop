import Router from './routes/router'
import { UserProvider } from './context/globalStateContext'
import './App.css'

const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App
