import React from 'react'
import { useRouteError } from 'react-router-dom'

type Props = {}

const ErrorPage: React.FC<Props> = () => {
  const routeError = useRouteError() as unknown as any
  console.error(routeError)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{routeError.statusText || routeError.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
