import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCar, updateCarDetails } from '../../features/cars/carSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CarForm = ({car}) => {
  console.log(car);
  

const {edit ,isSuccess, message} = useSelector(state => state.car)
console.log(edit);
  

  const [formData, setformData] = useState({
      name : "",
      company : "",
      rate : "",
      seats : "",
      mileage : "",
      category : "",
      fuelType : "",
      registration : "",
      image : "",
      transmission : "",
      description : "" ,
  })

  const {name,company, rate , seats, mileage, category, fuelType, 
    registration , image , transmission , description} = formData

  const handelChange = (e) => {
      setformData({
        ...formData,
        [e.target.name] : e.target.value
      })
  }

  const handelFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setformData({...formData, image : selectedFile})
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handelSubmit = (e) => {
    e.preventDefault()
    // console.log(formData);
    
   !edit.isEdit ? dispatch(addCar(formData)) : dispatch(updateCarDetails(formData))
    
  }

  useEffect(() => {
    if(isSuccess && message){
      toast.success(message, {
        position : 'top-center'
      })

      navigate('/admin')
    }

    setformData(car)
  },[isSuccess, message])

  const handelCancel = () => {
    navigate('/admin')
  }

 
 
  return (
    <form onSubmit={handelSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={name} onChange={handelChange}
          // defaultValue={car?.name}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">company</label>
          <input
            type="text"
            name="company"
            value={company} onChange={handelChange}
            // defaultValue={car?.brand}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Rate per day</label>
          <input
            type="number"
            name="rate"
            value={rate} onChange={handelChange}
            step="0.01"
            // defaultValue={car?.price}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Model</label>
          <input
            type="text"
            name="model"
            // defaultValue={car?.model}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div> */}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">seats</label>
          <input
            type="number"
            name="seats"
            value={seats} onChange={handelChange}
            // defaultValue={car?.year}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">mileage</label>
          <input
            type="number"
            name="mileage"
            value={mileage} onChange={handelChange}
            // defaultValue={car?.year}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
       
      </div>

      <div className='w-full flex '>

      <div className='w-[50%]'>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select 
          value={category} onChange={handelChange}
          name="category" 
          // defaultValue={car?.available ? 'true' : 'false'}
          className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value='' >select options</option>
          <option value="hatchback">hatchback</option>
          <option value="suv">suv</option>
          <option value='sedan'>sedan</option>
          <option value='coupe'>coupe</option>
          <option value='coupe'>jeep</option>

        </select>
      </div>

      <div className='w-[50%] '>
        <label className="block text-sm font-medium text-gray-700">Fuel-Type</label>
        <select
          name="fuelType" 
          value={fuelType} onChange={handelChange}
          // defaultValue={car?.available ? 'true' : 'false'}
          className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value=''>select option</option>
          <option value='petrol'>petrol</option>
          <option value='diesel'>diesel</option>
          <option value='cng'>cng</option>
          <option value='ev'>ev</option>

        </select>
      </div>

      </div>

     

      <div>
        <label className="block text-sm font-medium text-gray-700">Registration </label>
        <input
          type="text" name='registration'
          value={registration} onChange={handelChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="file"
          
         onChange={handelFileChange}
          // defaultValue={car?.image}
          className="mt-1 block w-full h-6 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Transmission</label>
        <select
          name="transmission"
          value={transmission} onChange={handelChange}
          // defaultValue={car?.available ? 'true' : 'false'}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option>select option</option>
          <option value='Automatic'>Automatic</option>
          <option value='Manual'>Manual </option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description </label>
        <input
          type="text"
          name="description"
          value={description} onChange={handelChange}
          // defaultValue={car?.image}
          className="mt-1 block w-full h-7 text-xl rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex justify-end space-x-3 ">
        <button
          type="button"
          onClick={handelCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button 
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
         {Object.keys(car).length === 0 ? 'Add Car' : 'Update Car'}
        </button>
      </div>
    </form>
  );
}

export default CarForm
