import React from 'react'
import { Route, Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Root from '../containers/App'

export default () => {
  return (
    <Router history={ BrowserRouter }>
      <Route path="/name" component={Root} />
    </Router>
  )
}
