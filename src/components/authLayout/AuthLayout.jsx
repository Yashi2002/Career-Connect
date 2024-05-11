import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AuthLayout = ({user,children}) => {
   const [loading,setLoading]=useState(true);
    const navigate=useNavigate();

    useEffect(()=>{
        if(Object.keys(user).length===0){
            navigate("/login")
        }else{
            navigate("/");
        }
        setLoading(false);
        
    },[user,navigate])

  return (
  <div>
    {
        loading?"Loading..":children
    }
  </div>
  )
}

export default AuthLayout