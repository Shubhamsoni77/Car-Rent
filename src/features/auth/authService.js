import axios from "axios"

const register = async(formData) => {
    console.log(formData);
    
    const response = await axios.post("https://car-rental-app-5d25.onrender.com/api/auth/register", formData)
    console.log(response.data);
    return response.data
}

const login = async (formData) => {
    console.log(formData);
    const response = await axios.post('https://car-rental-app-5d25.onrender.com/api/auth/login', formData)
    console.log(response.data);
    localStorage.setItem('user', JSON.stringify(response.data))
    return response.data
}


const authService = {register, login}

export default authService
