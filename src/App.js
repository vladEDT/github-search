import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Alert from './Components/Alert'

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Alert alert={{type: 'primary'}} />

        <Switch>
          <Route path='/profile/:name' component={Profile} />
          <Route path='/about' component={About} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
