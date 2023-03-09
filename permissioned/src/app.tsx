import React from 'react'
import { useRoutes } from 'react-router-dom'
import { router } from './routes'

type Props = {}

const App: React.FC<Props> = () => {
  const content = useRoutes(router)

  return <div>{content}</div>
}

export default App
