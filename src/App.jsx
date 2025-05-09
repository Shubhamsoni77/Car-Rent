import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import AdminDashBoard from './pages/AdminDashBoard'
import AllCarsPage from './pages/AllCarsPage'
import AllRentalPage from './pages/AllRentalPage'
import AllReview from './pages/AllReviews'
import UserRentalPage from './pages/UserRentalPage';
import UserCarDetail from './pages/UserCarDetail'
import Booking from './pages/Booking'
import SearchPage from './pages/SearchPage'
import { ToastContainer, toast } from 'react-toastify';
import UserReviewPage from './pages/UserReviewPage'
import PrivateRoute from './features/hooks/PrivateRoute'
import AdminRoute from './features/hooks/AdminRoute'


const App = () => {
  return (
    <>

    <BrowserRouter>
    <ToastContainer />
      <Navbar />

     <Routes>

      <Route path='/' element={<Home/>} />
     <Route path='/search/:input' element={<SearchPage/>} />

    <Route path='' element={<PrivateRoute/>} >
     <Route path='/userRental' element={<UserRentalPage/>} />
     <Route path='/carDetail/:id' element={<UserCarDetail/>} />
     <Route path='/userReview' element={<UserReviewPage/>} />
     <Route path='/booking/:id' element={<Booking/>} />
    </Route>


    <Route path='/admin' element={<AdminRoute/>} >
      <Route path='' element={<AdminDashBoard/>} />
      <Route path='/admin/cars' element={<AllCarsPage/>} />
      <Route path='/admin/rentals' element={<AllRentalPage/>} />
      <Route path='/admin/reviews' element={<AllReview/>} />
     </Route>


      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      </Routes> 
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
