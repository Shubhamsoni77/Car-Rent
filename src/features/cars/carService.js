import axios from "axios"

const fetchCars = async(page= 1, limit=100) => {
    const response = await axios.get(`https://car-rental-app-5d25.onrender.com/api/car?page=${page}&limit=${limit}`)
    console.log(response.data);
    return response.data
}

// const fetchCars = async (page = 1, limit = 100) => {
//     const response = await axios.get(
//       `https://car-rental-app-5d25.onrender.com/api/car?page=${page}&limit=${limit}`
//     );
//     return response.data; // Assuming it returns { cars: [], totalPages, currentPage }
//   };
  


const carAdding = async(formData, token) => {

    console.log(formData, token);
    const options = {
        headers : {
            authorization : `Bearer ${token}`,"Content-Type":'multipart/form-data'
        }
    }

    const response = await axios.post("https://car-rental-app-5d25.onrender.com/api/admin/car", formData, options)
    console.log(response.data);
    return response.data
}

const getCar = async(id) => {
    const response = await axios.get(`https://car-rental-app-5d25.onrender.com/api/car/${id}`)
    console.log(response.data);
    return response.data
}

const searchCar = async(input) => {
    console.log(input);
    
    const response = await axios.get(`https://car-rental-app-5d25.onrender.com/api/car/search?query=${input}`)
    console.log(response.data);
    return response.data
}

const deleteCar = async(id, token) => {
console.log(id, token);

    let options = {
            headers : {
                  authorization : `Bearer ${token}`
            }
    }

    const response = await axios.delete(`https://car-rental-app-5d25.onrender.com/api/admin/car/${id}`, options)
    console.log(response.data);
    return response.data
}

const updateCar = async(formData, token) => {
    console.log(formData);
    
        let options = {
                headers : {
                      authorization : `Bearer ${token}`
                }
        }
    
        const response = await axios.put(`https://car-rental-app-5d25.onrender.com/api/admin/car/${formData._id}`, formData , options)
        console.log(response.data);
        return response.data
    }



const carservice = {fetchCars, carAdding, getCar, searchCar, deleteCar, updateCar}

export default carservice

