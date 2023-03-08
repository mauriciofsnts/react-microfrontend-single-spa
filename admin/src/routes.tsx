import Dashboard from './layout/dashboard'
import * as Pages from './pages'

const router = [
  {
    path: '',
    element: <Dashboard />,
    errorElement: <Pages.Error />,
    children: [
      { path: 'home', element: <Pages.Home /> },
      { path: 'permissioned', element: <div id="app-container" /> },
    ],
  },
]

export { router }
