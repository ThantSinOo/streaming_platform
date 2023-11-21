import './App.css'

import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from 'react-router-dom'

 import Home from './pages/Home'
 import AnimeMovies from './pages/AnimeMovies'
 import AnimeSeries from './pages/AnimeSeries'
 import Manga from './pages/Manga'
 import LightNovel from './pages/LightNovel'
//  Import Layout Component 
 import RootLayout from './layout/RootLayout'


 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='animemovies' element={<AnimeMovies />} />
      <Route path='animeseries' element={<AnimeSeries />} />
      <Route path='manga' element={<Manga />} />
      <Route path='lightnovel' element={<LightNovel />} />
    </Route>
  )
 )

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
