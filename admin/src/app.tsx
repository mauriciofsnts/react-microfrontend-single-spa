import React from 'react'
import { useRoutes } from 'react-router-dom'
import { useKeycloak } from './context'
import { router } from './routes'

type Props = {}

const App: React.FC<Props> = () => {
  const { keycloak, initialized } = useKeycloak()

  const content = useRoutes(router)

  console.log('keycloak:', keycloak)

  if (!initialized) return <div />

  return <div>{content}</div>
}

export default App
