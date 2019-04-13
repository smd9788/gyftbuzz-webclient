import React, { Component } from 'react'
import './App.scss'

import AuthRoutes from './AuthRoutes.js'

import Alert from 'react-bootstrap/Alert'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts } = this.state

    return (
      <React.Fragment>
        {alerts.map((alert, index) => (
          <Alert key={index} dismissible variant={alert.type}>
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </Alert>
        ))}
        <main className="container">
          <AuthRoutes alert={this.alert}/>
          <h1>gyftBuzz</h1>
        </main>
      </React.Fragment>
    )
  }
}

export default App
