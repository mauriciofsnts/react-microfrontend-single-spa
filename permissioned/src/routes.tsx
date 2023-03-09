import Dashboard from './layout/dashboard'
import * as Pages from './pages'

const router = [
  {
    path: '',
    element: <Dashboard />,
    errorElement: <Pages.Error />,
    children: [
      { path: '', element: <Pages.Home /> },
      { path: 'secret', element: <Pages.Secret /> },
    ],
  },
]

export { router }
