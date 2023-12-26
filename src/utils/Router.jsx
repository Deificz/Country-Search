import React from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
  } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<Home/>}/>
        </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}
