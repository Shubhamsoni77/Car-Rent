import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOutUser } from '../features/auth/authSlice'
import { toast } from 'react-toastify'

const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, isSuccess , isError, message} = useSelector(state => state.auth)

  
  const handelLogOut = () => {
      dispatch(logOutUser())
      navigate('/login')
  }

  useEffect(() => {
    if(isSuccess && message){
      toast.success(message,{
        position : 'top-center'
      })
    }
  },[isSuccess, message])

  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
    <Link to="/" className="text-2xl font-bold text-secondary">CarRent</Link>
    
    <div className=" flex items-center space-x-5">
      
      {
        user ? (

          <>
            <Link to={user.isAdmin ? '/admin' : '/userRental'} 
            className='bg-yellow-500 px-2 py-1 font-semibold rounded-2xl' > {user.isAdmin ? "ADMIN" : "MyRentals" } </Link>
           
           <button onClick={handelLogOut}
          className='text-md font-bold bg-red-600 px-3 py-1 text-white rounded-2xl hover:cursor-pointer '>
             LogOut</button>
          </>

        ) : (

          <>
             {/* <Link href="/" className="nav-a">Home</Link>
             <Link href="/cars.html" className="nav-a">Cars</Link>
             <Link href="#" className="nav-a">About</Link>
             <Link href="#" className="nav-a">Contact</Link>  */}
             <Link to="/login" className="bg-yellow-400 px-4 rounded-2xl font-semibold text-gray-700">Login</Link>
             <Link to="/register" className="bg-yellow-400 px-4 rounded-2xl font-semibold text-gray-700">Register</Link>
          </>

        ) 
      }
      
    </div>
</nav>
  )
}

export default Navbar
