import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/globals.css'
import Layout from './app/layout'
import Page from './app/page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Page />
    </Layout>
  </StrictMode>,
)
