import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useAuth = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [checkStatus, setCheckStatus] = useState(true)

    const {user} = useSelector(state => state.auth)

    
    useEffect(() => {
        if(user){
            setIsLoggedIn(true)
        } else{
            setIsLoggedIn(false)
        }
        setCheckStatus(false)
    },[user])

    
    return { isLoggedIn , checkStatus , user };

}

export default useAuth