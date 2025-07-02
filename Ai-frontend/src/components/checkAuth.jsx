import React ,{useState , useEffect, use} from 'react'
import { useNavigate } from 'react-router-dom'
function checkAuth({children, protectedRoute}) {
    const navigate = useNavigate();
    const [loading , setLoading] = React.useState(true);
    useEffect(() => {
        // THIS  use effect is use for when navigation changes
        const token = localStorage.getItem("token")
        //token get token from local storage
        if(protectedRoute){
            if(!token){
                navigate("/login")
            }
            else{
                setLoading(false)
            }
        }
        else{
            if(token){
                navigate("/")
            }
            else{
                setLoading(false)
            }
        }

    },
[navigate, protectedRoute]);
if(loading){
    return (
    <div>loading...</div>
  )
}
else{
    return children
}
  
}

export default checkAuth