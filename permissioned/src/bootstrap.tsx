import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './app'

type Props = {}

const Bootstrap: React.FC<Props> = () => {
  return (
    <BrowserRouter basename="admin/permissioned">
      <App />
    </BrowserRouter>
  )
}

export default Bootstrap
