import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const HomePage: React.FC<Props> = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>Home Page</h1>

      <hr />

      <button onClick={() => navigate('secret')}>Secret page</button>
    </>
  )
}

export default HomePage
