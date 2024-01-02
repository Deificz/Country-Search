import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Home from '../pages/Home';
import Information from '../pages/Information'

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Home/>}/>
            <Route path="/info" element ={<Information/>}/>
        </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}
