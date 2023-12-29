import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Common from './components/Common.jsx';
import Address from './components/Address.jsx';
import Description from './components/Description.jsx';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '', element: <App />, children: [
      { path: '', element: <Common /> },
      { path: 'address', element: <Address /> },
      { path: 'description', element: <Description /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
