import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {AlertState} from './context/alert/alertState'
import {GithubState} from './context/github/GithubState'

ReactDOM.render(
  <React.StrictMode>
    <AlertState>
      <GithubState>
        <App />
      </GithubState>
    </AlertState>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
