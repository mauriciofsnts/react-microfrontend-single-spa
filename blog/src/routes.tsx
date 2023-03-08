import Blog from './layout/blog'
import * as Pages from './pages'

const router = [
  {
    path: '',
    element: <Blog />,
    errorElement: <Pages.Error />,
    children: [{ path: 'home', element: <Pages.Home /> }],
  },
]

export { router }
