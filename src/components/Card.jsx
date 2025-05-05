import React from 'react'
import { Link } from 'react-router-dom'

const RentalCard = ({car}) => {

  console.log(car);
  
  
  return (
    // <h1 className='text-black'>gefi</h1>
    <div className="car-card bg-white rounded-lg overflow-hidden shadow">
                    <img src={car.image} alt="Car" className="w-full h-48 object-cover "/>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                        <p className="font-bold text-green-600 mb-4">${car.rate}/day</p>
                        <div className="flex justify-between items-center">
                            <div className="text-sm font-medium text-gray-500">
                                <p>{car.category}</p>
                                <p>{car.company} </p>
                            </div>
                            <Link to={`/carDetail/${car._id}`} className="btn-primary bg-blue-500 px-2 py-1 font-semibold text-yellow-300 rounded-xl">
                            Book Now</Link>
                        </div>
                    </div>
                </div>
  )
}

export default RentalCard

