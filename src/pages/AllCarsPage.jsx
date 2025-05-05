import React, { useEffect, useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { editCar, getCars, removeCar } from "../features/cars/carSlice";
import { toast } from "react-toastify";
import CarForm from "../components/admin/CarForm";
import { useNavigate } from "react-router-dom";
import CarLoader from "../components/CarLoader";

const AllCarsPage = () => {
  const { user } = useSelector((state) => state.auth);

  const [showForm, setShowForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState({
    name : "",
    image : "",
    fuelType : "",
    rate : "",
    registration : "",
    category : "",
    company : "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cars, isLoading, isError, message, currentPage, totalPages, edit } =
    useSelector((state) => state.car);
  console.log(edit);

  const [page, setPage] = useState(currentPage || 1);
  const [size, setSize] = useState(10);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message, {
        position: "top-center",
      });
    } else {
      dispatch(getCars({ page, limit: size }));
    }
 
    setSelectedCar(edit.car)
  }, [isError, message, page, size, edit]);

  const handleDeleteCar = (id) => {
    // e.preventDefault()

    dispatch(removeCar(id));
  };

  const handelEdit = (mockCars) => {
    setShowForm(true);

    dispatch(editCar(mockCars))
  };

  // const [cars, setCars] = useState(mockCars);

  if (isLoading) {
    return (
      // <h1 className='text-center text-4xl font-bold text-yellow-400'>Loading...</h1>
      <>
        <div className="w-full h-screen flex p-10">
          <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           
            <CarLoader />
            <CarLoader />
            <CarLoader />

          </div>
        </div>
      </>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Cars Management</h1>
        <button
          onClick={() => {
            // setSelectedCar(null);
            setShowForm(true);
          }}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Car
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
            <h2 className="text-xl font-bold mb-4">
              {selectedCar ? "Update Car" : "Add New Car"}
            </h2>
            <CarForm
              car={selectedCar}
              // onSubmit={selectedCar ? handleUpdateCar : handleAddCar}
              onCancel={() => {
                setShowForm(false);
                setSelectedCar(null);
              }}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((mockCars) => (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={mockCars?.image}
              alt={mockCars?.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{mockCars.name}</h3>
              <p className="text-gray-600">{mockCars.company} </p>
              <p className="text-blue-600 font-semibold mt-2">
                ${mockCars.rate}/day
              </p>
              <div className="flex justify-between items-center mt-4">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    mockCars.isBooked
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {mockCars.isBooked ? "Available" : "Not Available"}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      handelEdit(mockCars);
                    }}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteCar(mockCars._id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* {totalPages > 1 && (
  <div className="flex justify-center mt-6 space-x-2">
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
    >
      Prev
    </button>
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrentPage(i + 1)}
        className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
      >
        {i + 1}
      </button>
    ))}
    <button
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
)} */}

        <div className="flex justify-center items-center gap-4 p-6 mt-8">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 transition"
          >
            Prev
          </button>

          <span className="text-sm font-medium text-gray-300">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCarsPage;
