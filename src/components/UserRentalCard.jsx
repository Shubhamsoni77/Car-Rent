import React from 'react'
import { Link } from 'react-router-dom';

const UserRentalCard = ({rentals}) => {

    console.log(rentals);
    

    return (
        <div className="car-card bg-white rounded-lg overflow-hidden shadow">
        {/* <img src={rentals.car.image} alt="Car" className="w-full h-48 object-cover "/> */}
        <div className="p-6">
            {/* <h3 className="text-xl font-bold mb-2">{rentals.car.name}</h3> */}
            {/* <p className="font-bold text-green-600 mb-4">${rentals.car.rate}/day</p> */}
            <div className="flex justify-between items-center">
                <div className="text-sm font-medium uppercase text-gray-500">
                    <p className='font-bold text-black text-lg'>Total-Bill :- ${rentals.totalBill} </p>
                    <p>{rentals.pickupDate} to {rentals.dropDate}</p>
                </div>
                <Link to={`/carDetail/${rentals.car._id}`} className="btn-primary bg-blue-500 px-2 py-1 font-semibold text-yellow-300 rounded-xl">
                View More</Link>
            </div>
        </div>
    </div> 
      )
}

export default UserRentalCard
