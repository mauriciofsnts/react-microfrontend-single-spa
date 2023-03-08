import React from 'react'
import App from './app'
import { BrowserRouter } from 'react-router-dom'

const Bootstrap: React.FC = () => {
  return (
    <BrowserRouter basename="blog">
      <App />
    </BrowserRouter>
  )
}

export default Bootstrap
