import { DollarSign, Fuel, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findUserCar, getCars, getUserCar } from '../features/cars/carSlice'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Home = () => {

  const {cars, isLoading, isSuccess , isError, message,currentPage,totalPages} = useSelector(state => state.car)
  

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [page,setPage]= useState(currentPage)
  const size = 6

  useEffect(() => {
    if (isError && message) {
      toast.error(message, {
        position: 'top-center'
      });
    } else {
      dispatch(getCars({ page, limit: size }));
    }
  }, [isError, message, size, page]); 
  

  const [input, setInput] = useState("")

  const handelSearch = (e) => {
    e.preventDefault()
    
    navigate(`/search/${input}`)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      handelSearch(e);
    }
  };

  
    
    if(isLoading){
      return(
         <h1 className='text-center text-4xl font-bold text-yellow-400'>Loading...</h1>
      )
    }

    return (
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <div 
            className="h-[600px] bg-gradient-to-r from-gray-900 to-gray-800 relative"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
                Find Your Perfect Drive
              </h1>
              <p className="text-xl text-gray-200 mb-8 text-center max-w-2xl">
                Discover our premium selection of vehicles for any occasion
              </p>
              <div className="w-[80%] flex max-w-2xl relative">
                <input onKeyDown={handleKeyDown}
                  type="text"
                  value={input} onChange={(e) => setInput(e.target.value)}
                  placeholder="Search for your dream car..."
                  className="w-full px-6 py-4 bg-white rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-gray-600 pr-12"
                />
                <button onClick={handelSearch}
                 className='bg-amber-300 text-center w-15 mx-4 flex items-center justify-center rounded-3xl  '>
                <Search  className=" transform -translate-y-1/2 text-gray-500 mt-5 " />

                </button>
              </div>
            </div>
          </div>
    
          {/* Trending Cars Section */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Trending Cars</h2>
              {/* <button className="text-gray-700 hover:text-gray-900 font-semibold">
                View all cars →
              </button> */}
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{car.name}</h3>
                    <div className="flex items-center mb-4">
                      <Fuel className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-600">{car.fuelType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <DollarSign className="w-5 h-5 text-gray-900" />
                        <span className="text-xl font-bold text-gray-900">{car.rate}</span>
                        <span className="text-gray-600 ml-1">/day</span>
                      </div>
                      <Link 
                      to={`/carDetail/${car._id}`} className="text-gray-900 font-semibold hover:text-gray-700">
                        Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
          <div className="flex justify-center items-center gap-3 p-5">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-xs p-4 font-medium text-gray-500">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
        </div>
    )
}

export default Home
