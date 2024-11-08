import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterPage from "../pages/FooterPage"
import HomePage from '../pages/HomePage'
import HeaderPage from '../pages/HeaderPage'
const Layout = () => {
  return (
    <>
    <header><HeaderPage/></header>
    <main><Outlet/></main>
    <footer><FooterPage/></footer>
    </>
  )
}

export default Layout