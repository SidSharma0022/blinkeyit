import React from 'react'
import logo from '../assets/logo.png'
import Search from './Search'
import { Link, useLocation,useNavigate} from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import useMobile from "../hooks/useMobile"
import { FaLuggageCart } from "react-icons/fa";

const Header = () => {
  const [isMobile] = useMobile()
  const location = useLocation()

  const isSearchPage = location.pathname === '/search'
  const navigate = useNavigate()
  
  const redirectToLoginPage = ()=>{
navigate("/login")
  }

  return (
    <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white'>
        {
          !(isSearchPage && isMobile) && (
            <div className='container mx-auto flex items-center px-2 justify-between'>
         
        <div className='h-full'>
          <Link to={"/"} className='h-full flex justify-center items-center'>
            <img src={logo} width ={170} height ={80} alt="logo" className='hidden lg:block'/>
            <img src={logo} width ={120} height ={80} alt="logo" className='lg:hidden'/>

          </Link>
        </div>
       
  <div className='hidden lg:block'>
                                    <Search/>
                                </div>
                                     
        <div className=''>
          {/*user icon display in only mobile version*/}
          <button className='text-neutral-600 lg:hidden'>
           <FaRegUserCircle  size={25} onClick={redirectToLoginPage}/>

          </button>
                    {/*desktop*/}

          <div className='hidden lg:flex items-center gap-10'>
            <button onClick={redirectToLoginPage} className='text-base px-2'>Login</button>
            
            <button className='flex items-center gap-2 bg-green-600 px-4 py-1 rounded hover:bg-green-700'>
              {/*add to cart*/}
              
              <div className='animate-bounce'>
                <FaLuggageCart size={29}/>
  </div>

              <div className='font-normal'>
               <p>My Cart</p> 
              </div>
              {/* <div>
                <p>
                  Items
                </p>
                <p>Total Price</p>
              </div> */}
            </button>
          </div>
          
        </div>
        </div>
          )
        }
        
        
        <div className='container mx-auto px-2 lg:hidden'>
          <Search />
        </div>
    </header>
  )
}

export default Header