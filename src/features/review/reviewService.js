import axios from "axios"

const fetchReview = async(token) => {

    const options = {
            headers : {
                authorization : `Bearer ${token}`
            }
    }
    // console.log(options);
    
    const response = await axios.get("https://car-rental-app-5d25.onrender.com/api/admin/reviews", options)
    console.log(response.data);
    return response.data
}

 const userReview = async(id, token) => {
    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }
console.log(options)
    const response = await axios.get(`https://car-rental-app-5d25.onrender.com/api/car/${id}/reviews`,options)
    console.log(response.data);
    return response.data
 }

 const addReview = async(formData ,token) => {
    const options = {
        headers : {
            authorization : `Bearer ${token}`
        }
    }

    const response = await axios.post(`https://car-rental-app-5d25.onrender.com/api/car/${formData.id}/reviews/add`, formData, options)
    console.log(response.data);
    return response.data
}
 

const reviewService = {fetchReview, userReview, addReview}

export default reviewService
