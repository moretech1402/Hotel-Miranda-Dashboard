import '../../styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Booking } from '../pages/Booking'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Layout } from './Layout'
import { theme } from '../../app/theme'
import { pages } from '../../app/pages'
import { Login } from '../pages/Login'
import { Rooms } from '../pages/Rooms'
import { Concierges } from '../pages/Concierges'
import { GuestDetail } from '../pages/GuestDetail'
import { AuthMiddleware } from '../auth/AuthMiddleware'
import React from 'react'
import { Contact } from '../pages/Contact'
import {axiosSetup} from '../../app/axiosSetup'
import { RoomDetail } from '../pages/RoomDetail'
import { UserDetail } from '../pages/UserDetail'
import { Hello } from '../pages/Hello'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.mainContrast};
  }
`;

export const App = () => {
  axiosSetup();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={pages.login.path} element={<Login />} />
          <Route path="/test" element={<Hello />} />
          <Route element={<AuthMiddleware />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={pages.booking.path} element={<Booking />} />
              <Route path={`${pages.booking.path}/:id`} element={<GuestDetail />} />
              <Route path={pages.rooms.path} element={<Rooms />} />
              <Route path={`${pages.rooms.path}/:id`} element={<RoomDetail />} />
              <Route path={pages.users.path} element={<Concierges />} />
              <Route path={`${pages.users.path}/:id`} element={<UserDetail />} />
              <Route path={pages.contact.path} element={<Contact />} />
              <Route path={`${pages.contact.path}/:id`} element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};