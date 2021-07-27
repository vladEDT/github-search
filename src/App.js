import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'semantic-ui-loader/loader.min.css'

import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Alert from './Components/Alert'

function App() {
  return (
    <Router>
      <Navbar />
      <div className='bg-secondary pt-3' style={{minHeight: '100vh'}}>
        <div className='container '>
          <Alert alert={{type: 'primary'}} />

          <Switch>
            <Route path='/profile/:name' component={Profile} />
            <Route path='/about' component={About} />
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
