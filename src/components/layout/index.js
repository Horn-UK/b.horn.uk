import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './layout.scss'

const Layout = ({ children }) => (
  <div className='container'>
    {children}
  </div>
)

export default Layout
