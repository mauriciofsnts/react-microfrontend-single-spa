import Keycloak, { KeycloakInstance } from 'keycloak-js'

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { KEYCLOAK_CLIENT_ID, KEYCLOAK_REALM, KEYCLOAK_URL } from '../core'

type KeycloakContextProps = {
  handleLogout: () => void
  authenticated: boolean
  initialized: boolean
  keycloak: KeycloakInstance | undefined
}

export const KeycloakContext = createContext<KeycloakContextProps>({
  authenticated: false,
  initialized: false,
  keycloak: Keycloak(),
  handleLogout: () => {},
})

type KeycloakContextProviderProps = {
  children: ReactNode
}

export const KeycloakContextProvider: React.FC<
  KeycloakContextProviderProps
> = ({ children }) => {
  const [keycloakValue, setKeycloakValue] = useState<KeycloakInstance>()
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const [initialized, setInitialized] = useState<boolean>(false)

  const setKeycloak = () => {
    const keycloak = Keycloak({
      url: KEYCLOAK_URL,
      realm: KEYCLOAK_REALM,
      clientId: KEYCLOAK_CLIENT_ID,
    })

    keycloak
      .init({
        onLoad: 'login-required',
        checkLoginIframe: false,
      })
      .then((authenticated) => {
        setKeycloakValue(keycloak)
        setAuthenticated(authenticated)
        setInitialized(true)
      })
  }

  useEffect(() => {
    setKeycloak()
  }, [])

  const handleLogout = (): void => {
    if (!keycloakValue) return
    keycloakValue.logout()

    setAuthenticated(false)
  }

  return (
    <KeycloakContext.Provider
      value={{
        handleLogout,
        authenticated: authenticated,
        keycloak: keycloakValue,
        initialized,
      }}
    >
      {children}
    </KeycloakContext.Provider>
  )
}

export const useKeycloak = (): KeycloakContextProps =>
  useContext(KeycloakContext)
