import React, {useState} from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import SummaryApi from '../common/SummaryApi';
import toast from 'react-hot-toast';
import Axios from '../utils/Aixos';
import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [data,setData] = useState({
        email:'',
        password:''
    })
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e)=>{
        const {name, value} = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name]:value
                
            }
        })
    }
    const validateValue = Object.values(data).every(el => el)
    const handleSubmit = async(e) =>{
        e.preventDefault ()
       
        try {
        const response = await Axios({
           ...SummaryApi.login,
           data: data

        })
        if(response.data.error){
            toast.error(response.data.message)
        }
        if(response.data.success){
            toast.success(response.data.message)
            setData({
                email:'',
                password:''
            })
            navigate('/')
        }
        console.log("response", response)
     } catch (error) {
           AxiosToastError(error)
        }
    }


  return (
    <section className=' w-full container mx-auto px-2'>

<div className='bg-white py-4 w-full max-w-lg mx-auto my-4 rounded p-4'>
    
<p>Welcome to BlinkeyIt</p>
<form  className='grid gap-2 mt-5' onSubmit={handleSubmit}>
    
     <div className='grid gap-2'>
        <label htmlFor="email">Email</label>
        <input type="mail" placeholder='Enter Your email' 
         required name='email' id='email'
        className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200'
        p-2 value ={data.email}
        onChange={handleChange}
        />
    </div>
     <div className='grid gap-2'>
        <label htmlFor="password">Password</label>
      <div className='flex h-full items-center'>
          <input type={showPassword ? "text" : "password"} placeholder='Enter Your Password' 
         required name='password' id='password'
        className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200 w-full'
        p-2 value ={data.password}
        onChange={handleChange}
        />
        <div onClick={()=>setShowPassword(preve => !preve)} className='cursor :pointer'>
        {
           showPassword ? (
           <FaRegEye />
           ) : (
            <FaEyeSlash />
           )
        }
        </div>
      </div>
    </div>
     

    <button disabled ={!validateValue} className={`${validateValue ? "bg-green-800 text-white hover:bg-green-700" : "bg-slate-500 text-black"}  p-2 text-white py-2 rounded font-semibold my-3 tracking-wide`}>Login</button>
</form>
<div className='flex justify-between'>
<span >Don't have an Account ? <Link to={"/Register"} className='text-green-600 hover:text-green-700 font-semibold'>Register</Link> </span>
<span className='text-right text-blue-500 hover:text-blue-600'><Link to={"/ForgetPassword"}>Forget Password</Link></span>
    </div>
</div>
    </section>
  )
}

export default Login
