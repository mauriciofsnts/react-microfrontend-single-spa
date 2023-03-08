import React from 'react'
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { KeycloakContextProvider } from './context'

type Props = {}

const Bootstrap: React.FC<Props> = () => {
  return (
    <BrowserRouter basename="admin">
      <KeycloakContextProvider>
        <App />
      </KeycloakContextProvider>
    </BrowserRouter>
  )
}

export default Bootstrap
