import React from 'react'
import Sidebar from '../../pages/Dashboard/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'


const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user} = useSelector((state) => state.auth)
  console.log(user)

  useEffect(() =>{
if(! user?.user?.Role ==="ADMIN" || ! user?.user?.Role )
{ navigate("/")}

    

  },[])
  return (
    <div  className='flex flex-nowrap gap-2  items-start    mx-auto 
     sm:w-[100%] 
     '>

       <div className='lg:w-[27%]    sm:w-[40%]  '>
        
       <Sidebar/>
       </div>
      <div className='b lg:w-[100%]    sm:w-[100%] '>
      <Outlet  />
      
      </div>
       
    </div>
  )
}

export default Dashboard;