import React from 'react'
import { Route, Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import App from '../containers/App'

export default () => {
  return (
    <BrowserRouter>
      <Route path="/name" component={App} />
    </BrowserRouter>
  )
}
