import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewRental } from '../features/rentals/rentalSlice'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Booking = () => {

    const {user} = useSelector(state => state.auth)
    const {rentalSuccess, rentalMessage, rentaError} = useSelector(state => state.rental)
    const {car} = useSelector(state => state.car)
    console.log(car);
    

    const {id} = useParams()

    
     useEffect(() => {
        if(rentaError && rentalMessage){
            toast.error(rentalMessage ,{
                position : 'top-center'
            })
        }
 
        if(rentalSuccess && rentalMessage) {
            toast.success(rentalMessage, {
                position : 'top-center'
            })
        }
    },[rentalSuccess, rentalMessage, rentaError])

    

    const dispatch = useDispatch()

    const [pickupDate , setPickupDate] = useState("")
    const [dropDate, setDropDate] = useState("")

   
    const handelSubmit = (e) => {
        e.preventDefault()

        let split1 = pickupDate.split('-')
        let formatePickupDate = `${split1[1]}/${split1[2]}/${split1[0]}`
        console.log(formatePickupDate);
        let split2 = dropDate.split('-')
        let formateDropDate = `${split2[1]}/${split2[2]}/${split2[0]}`
        console.log(formateDropDate);

        
        dispatch(createNewRental({
            id : id,
            pickupDate : formatePickupDate,
            dropDate : formateDropDate
        }))
    }
    

    return (

        <>

    {/* before booking */}
        <div>
                <div className="bg-gray-50">
       
    
        <main className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8">Book Your Car</h1>
                    
                    {/* <!-- Selected Car Summary --> */}
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                        <div className="flex items-center space-x-4">
                            <img src={car.image} alt="Car" className="w-24 h-24 object-cover rounded"/>
                            <div>
                                <h2 className="text-xl font-bold">{car.name}</h2>
                                <p className="text-primary font-bold">${car.rate}/day</p>
                            </div>
                        </div>
                    </div>
    
                    {/* <!-- Booking Form --> */}
                    <form onSubmit={handelSubmit}
                    className="bg-white rounded-lg shadow-lg p-6">
                        {/* <!-- Personal Information --> */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 mb-2">Full Name</label>
                                    <input
                    id="name"
                    name="name"
                   
                    type="text"
                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                                  
                                </div>
                                {/* <div>
                                    <label className="block text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" required/>
                                </div> */}
                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input name='email'
                                     type="email" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Phone</label>
                                    <input name='phone' 
                                    type="tel" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" />
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Rental Details --> */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-4">Rental Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 mb-2">Pickup Date</label>
                                    <input name='pickupDate' required value={pickupDate} onChange={(e) => setPickupDate(e.target.value)}
                                    type="date" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Drop Date</label>
                                    <input name='dropDate' required value={dropDate} onChange={(e) => setDropDate(e.target.value)}
                                    type="date" className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Pickup Location</label>
                                    <select name='pickupLocation' 
                                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" >
                                        <option> 0 </option>
                                        <option>Downtown Office</option>
                                        <option>Airport Terminal</option>
                                        <option>South Branch</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Drop Location</label>
                                    <select name='dropLocation' 
                                    className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" >
                                        <option className=''  >0</option>
                                        <option>Downtown Office</option>
                                        <option>Airport Terminal</option>
                                        <option>South Branch</option>
                                    </select>
                                </div>
                            </div>
                        </div>
    
                       
    
                        {/* <!-- Submit Button --> */}
                        <button  type="submit" className="w-full bg-orange-300 text-gray-700 font-bold text-xl rounded-2xl btn-primary py-3">Complete Booking</button>
                    </form>
                </div>
            </div>
        </main>
    
        
    </div>
        </div>
    
    
    </>
    
      )
}

export default Booking
