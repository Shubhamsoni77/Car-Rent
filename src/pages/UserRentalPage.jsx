import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserRental } from '../features/rentals/rentalSlice'
import RentalCard from '../components/Card'
import { useNavigate } from 'react-router-dom'
import UserRentalCard from '../components/UserRentalCard'

const UserRentalPage = () => {

  const {user} = useSelector(state => state.auth)
  const {rentals} = useSelector(state => state.rental)
console.log(rentals,"rental");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
      if(!user){
        navigate('/login')
      }

    dispatch(getUserRental())
    
  },[user])
 

  return (
    <div>
    <h2 className="text-gray-600 font-bold text-2xl text-center uppercase my-10">My Rentals</h2>

    <div className="my-25  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {

         rentals.length > 0  && rentals?.map((rentals) => <UserRentalCard rentals={rentals} /> )
          
          

        }           
 
    </div>
  </div>
)
}

export default UserRentalPage
