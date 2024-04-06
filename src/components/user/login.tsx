import React, { useContext, useState } from 'react'
import { IoClose } from "react-icons/io5";
import { CountCT } from '../../layouts/layout';
import { UserLogin } from '../../services/auth';
import { json } from 'stream/consumers';
import { Navigate, useNavigate } from 'react-router-dom';
const Login = () => {
  const [state, setState] = useContext(CountCT) as any
  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const navigate = useNavigate()
  const handleSubmit = async (e:any)=>{

    e.preventDefault()
    try {
      const user = await UserLogin({ email, password });
      // console.log(user);
      
      if (user?.name==="AxiosError"){
        alert(user.response.data)
      }
      else {
        sessionStorage.setItem("user",JSON.stringify(user))
        console.log(user);
        
        alert('Đăng nhập thành công')
        if(user.user.role == 'member'){
          navigate('/')
        }else{
          navigate('/admin')
        }
      }
    } catch (error) {
      alert((error as Error)?.message);
    }
  };
  return (
    <div className='bg-overlay'>

      <form className="max-w-sm mx-auto border w-[500px]" onSubmit={handleSubmit}>
       <button type='button' onClick={()=>setState('')}><IoClose/></button>
        <h2 className='text-center'>Đăng Nhập</h2>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
          <input 
          onChange={(e:any)=>{setEmail(e.target.value)}}
          type="email" id="email" className="bg-while border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-while dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
          <input 
          onChange={(e:any)=>{setPassword(e.target.value)}}
          type="password" id="password" 
          className="bg-while border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-bg-while dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit" className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </div>
  )
}

export default Login