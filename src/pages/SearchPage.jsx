import React, { useEffect } from 'react'
import RentalCard from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { findUserCar } from '../features/cars/carSlice'
import { useParams } from 'react-router-dom'

const SearchPage = () => {

    const {cars, isLoading} = useSelector(state => state.car)
    // console.log(cars);
    const dispatch = useDispatch()
    const {input} = useParams()
    console.log(input);
    
    useEffect(() => {
        dispatch(findUserCar(input))
    },[input])


    if(isLoading){
        return(
          <h1 className='text-center text-4xl font-bold text-yellow-400'>Loading...</h1>
        )
    }

    return (
        <div>
        <h2 className="text-yellow-400 font-bold text-center uppercase my-5"> Search Results</h2>
    
        <div className="my-25  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {
              cars.map((car) => <RentalCard  car={car} />)
           }                      
    
        </div>
      </div>
      )
}

export default SearchPage
