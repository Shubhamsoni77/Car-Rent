import axios from "axios"

const rentals = async(token) => {

    let options = {
         headers : {
            authorization : `Bearer ${token}`
         } 
    }

    const response = await axios.get("https://car-rental-app-5d25.onrender.com/api/admin/rentals", options)
    console.log(response.data);
    return response.data    
}

const userRental = async(token) => {

    let options = {
        headers : {
           authorization : `Bearer ${token}`
        } 
   }

    const response = await axios.get("https://car-rental-app-5d25.onrender.com/api/rentals", options)
    console.log(response.data);
    return response.data
}

const addRental = async(formData,token) => {

    let options = {
            headers : {
                authorization : `Bearer ${token}`
            }
    }

    console.log(formData);
    const response = await axios.post(`https://car-rental-app-5d25.onrender.com/api/rentals/${formData.id}`, formData, options)
    console.log(response.data);
    return response.data
}

const rentalService = {rentals, userRental, addRental}

export default rentalService 
