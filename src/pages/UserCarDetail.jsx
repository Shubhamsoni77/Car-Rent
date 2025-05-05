import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getUserCar } from '../features/cars/carSlice';
import { toast } from 'react-toastify';
import { getUserReview } from '../features/review/reviewSlice';
import UserReviewPage from './UserReviewPage';

const UserCarDetail = () => {

    const {id} = useParams()

    const {user} = useSelector(state => state.auth)
    const {car, isLoading , isError , message} = useSelector(state => state.car)
    const {review} = useSelector(state => state.review)
  // console.log(review);
  
  const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getUserReview(id))
    },[id])

    useEffect(() => {
      if(!user){
        navigate('/login')
      }

      if(isError && message){
        toast.error(message, {
          position : 'top-center'
        })
      }else{

        dispatch(getUserCar(id))
        window.scrollTo(0,0)
      }
    },[user,isError, message, id])


    if(isLoading){
      return(
      <h1 className='text-center text-4xl font-bold text-yellow-400'>Loading...</h1>

      )
    }
    
    return (
        <div className="bg-gray-50">
         
    
          {/* Main Content */}
          <main className="pt-24 pb-20">
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Car Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                  <img
                    src={car?.image}
                    alt="Car"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(4)].map((_, index) => (
                      <img
                        key={index}
                        src={car?.image}
                        alt="Car Detail"
                        className="w-full h-44 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
    
                {/* Car Details */}
                <div className="p-6 border-t">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{car?.name}</h1>
                      <p className="text-2xl text-primary font-bold">${car?.rate}/day</p>
                    </div>
    
                    <Link to={car.isBooked ? "#" : `/booking/${car?._id}`} className={
                      car.isBooked
                      ? "text-white bg-gray-500 px-3 py-1 font-bold rounded-2xl cursor-not-allowed " 
                      : "text-gray-700 bg-green-600 px-2 py-1 font-bold  rounded-2xl"
                    }
                    disabled = {car.isBooked}
                    >
                     {car?.isBooked ? "Not Available" : "Book Now"}
                    </Link>
                  </div>
    
    
                  {/* Specifications */}
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* {[
                      { label: "Type", value: "Electric" },
                      { label: "Seats", value: "5" },
                      { label: "Range", value: "358 miles" },
                      { label: "Transmission", value: "Automatic" },
                    ].map((spec, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">{spec.label}</p>
                        <p className="font-semibold">{spec.value}</p>
                      </div>
                    ))} */}
    
                     <div  className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">{car?.category}</p>
                        <p className="font-semibold">category</p>
                      </div>
    
                      <div  className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">{car?.fuelType}</p>
                        <p className="font-semibold">Fuel-Type</p>
                      </div>
    
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">{car?.company}</p>
                        <p className="font-semibold">Company</p>
                      </div>
    
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-500">{car?.registration}</p>
                        <p className="font-semibold">Registration</p>
                      </div>
                     
    
                  </div>
    
                  {/* Description */}
                  <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Description</h2>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit itaque hic natus non, eligendi perspiciatis magni modi alias id odio, saepe magnam. Sint molestiae, omnis reprehenderit sed eos commodi optio.
                    </p>
                  </div>
    
                  {/* Features */}
                  <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Features</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {["Autopilot", "Premium Audio", "Heated Seats", "15\" Touchscreen", "Wireless Charging", "Glass Roof"].map(
                        (feature, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            ✓ {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <UserReviewPage review={review} /> 
            {/* <div className='grid grid-cols-1'>
                {
                  review.map((review) => )
                }
            </div> */}

        </div>
      );
  
}

export default UserCarDetail
