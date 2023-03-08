import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Bootstrap from './bootstrap'

function domElementGetter() {
  let el = document.getElementById('sub-module-wrap')

  if (!el) {
    el = document.createElement('div')
    el.id = 'sub-module-wrap'
  }

  let timer = null
  timer = setInterval(() => {
    if (document.querySelector('#app-container')) {
      document.querySelector('#app-container').appendChild(el)
      clearInterval(timer)
    }
  }, 100)

  return el
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Bootstrap,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null
  },
  domElementGetter,
})

export const { bootstrap, mount, unmount } = lifecycles
