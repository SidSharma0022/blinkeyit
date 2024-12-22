import React, {useState} from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import SummaryApi from '../common/SummaryApi';
import toast from 'react-hot-toast';
import Axios from '../utils/Aixos';
import AxiosToastError from '../utils/AxiosToastError';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword :''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
        if(data.password !== data.confirmPassword){
            toast.error(
                'Password and Confirm Password must be same'
            )
            return
        }
        try {
        const response = await Axios({
           ...SummaryApi.register,
           data: data

        })
        if(response.data.error){
            toast.error(response.data.message)
        }
        if(response.data.success){
            toast.success(response.data.message)
            setData({
                name:'',
                email:'',
                password:'',
                confirmPassword:''
            })
            navigate('/Login')
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
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='Enter Your Name' 
        autoFocus required name='name' id='name'
        className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-2003e33342w'
        p-2 value ={data.name}
        onChange={handleChange}
        />
    </div>
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
     <div className='grid gap-2'>
        <label htmlFor="confirmPassword">Confirm Password</label>
      <div className='flex h-full items-center'>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id='confirmPassword'
                                className='bg-blue-50 p-2 border rounded flex items-center focus-within:border-primary-200 w-full'
                                name='confirmPassword'
                                value={data.confirmPassword}
                                onChange={handleChange}
                                placeholder='Enter your confirm password'
                            />
                            <div onClick={() => setShowConfirmPassword(preve => !preve)} className='cursor-pointer'>
                                {
                                    showConfirmPassword ? (
                                        <FaRegEye />
                                    ) : (
                                        <FaEyeSlash />
                                    )
                                }
                            </div>
                        </div>
    </div>

    <button disabled ={!validateValue} className={`${validateValue ? "bg-green-800 text-white hover:bg-green-700" : "bg-slate-500 text-black"}  p-2 text-white py-2 rounded font-semibold my-3 tracking-wide`}>Register</button>
</form>

<p className='text-center'>Already have an Account ? <Link to={"/Login"} className='text-green-600 hover:text-green-700 font-semibold'>Login</Link> </p>
    
</div>
    </section>
  )
}

export default Register