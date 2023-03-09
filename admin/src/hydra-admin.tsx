import React from 'react'
import * as ReactDOM from 'react-dom/client'
import singleSpaReact from 'single-spa-react'
import Bootstrap from './bootstrap'

const ReactDom = ReactDOM as any

const lifecycles = singleSpaReact({
  React,  
  ReactDOM: ReactDom,
  rootComponent: Bootstrap,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null
  },
})

export const { bootstrap, mount, unmount } = lifecycles
