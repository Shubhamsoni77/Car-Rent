import React, { useEffect } from 'react';
import { Calendar, User } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getRental } from '../features/rentals/rentalSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AllRentalPage = () => {

  // const mockRentals = [
  //   {
  //     id: '1',
  //     userId: 'user1',
  //     carId: 'car1',
  //     startDate: '2024-03-01',
  //     endDate: '2024-03-05',
  //     status: 'active',
  //     userName: 'John Doe',
  //     carName: 'Tesla Model 3'
  //   },
  // ];

  const {user} = useSelector(state => state.auth)
  

  const {rentals, rentalLoading, rentaError, rentalMessage} = useSelector(state => state.rental)
  console.log(rentals.users);
  // rentals.users.map((user))=> user.rentals.map(rental)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useEffect(() => {
  //   dispatch(getRental())
  // },[])

   useEffect(() => {
      if(!user){
        navigate('/')
      }

      if(rentaError && rentalMessage){
        toast.error(rentalMessage,{
          position : 'top-center'
        })
      }else{

        dispatch(getRental())
      }
     },[rentaError, rentalMessage])


  if(rentalLoading) {
    return(
      <h1 className='text-center text-4xl font-bold text-yellow-400'>Loading...</h1>
      
    )
  }


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Rental Management</h1>
      
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Car
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rentals?.users?.map((user) => user?.rentals?.map((rental) =>{

           
              return (
                <tr key={rental.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-2" />
                      <div className="text-sm font-medium text-gray-900">
                        {rental.userName}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{rental.carName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <div className="text-sm text-gray-900">
                        {rental.pickupDate} to {rental.dropDate}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span 
                    className={
                       rental.status !== 'Booked'
                       ? " px-2 py-1 font-bold inline-flex leading-5  rounded-full bg-green-100 text-green-800"
                       : "px-2 py-1 inline-flex leading-5 font-bold rounded-full bg-red-100 text-red-800"
                    }
                    
                    // className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    //   rental.status === 'Booked'
                    //     ? 'bg-green-100 text-green-800'
                       
                    //     : 'bg-red-100 text-red-800'
                    // }`}
                    >
                     { rental.status}                    </span>
                  </td>
                </tr>
              )

 } ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllRentalPage
